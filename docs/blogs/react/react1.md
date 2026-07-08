# 使用react中的闭包陷阱

---

## 1.异步更新导致的数据变化延迟

因为react是一个响应式框架，也就是说当页面的响应式变量（一般指的是使用useState定义的值）发生变化的时候，将会触发渲染，和传统操作中的变量不同，这种变化是批量的（对应react文档中的批量异步更新），所以当一个变量在被多次操作的时候，会出现为什么传入值我更新了好几次，但是最后更新的结果却是以初始传入值作为更新基础的?
下面展示一个案例。

```js
const [testValue,setTestValue]=useState(0)
<div>{testValue}</div>
 <button onclick=" ()=>{ setTestValue(testValue+1);setTestValue(testValue+2)}">按钮1<button>
```

我按下了'按钮1'，你会发现最后页面是渲染的结果是2，如果按照同步执行的顺序，结果应该是1+2=3才对，但是为什么结果是2呢？
这是因为useState的更新是异步的，如果事件没有执行完毕，他不会立马更新，而是缓存更新到队列，最后更新，这会导致值在下一次setState之前依旧拿到是旧值，所以这里的结果是2。那怎么让结果达到我们预期的3呢？
**答案**是使用**函数式更新**。
我们知道setState原本就是允许**函数式更新**和**值更新**的，但是他们的**区别**是什么呢？
事实上,函数式更新会传递一个参数比如，setTestValue((oldValue)=>oldValue+1),这里的oldValue相当于是一个临时变量，他会记录你对这个State（这里是testValue）的每一次操作，所以你每一次拿到的值都是最新的，就解决了这个问题。

这是因为事件处理函数本身是在某一次渲染的闭包里执行的,testValue 在这次渲染中永远是同一个值,不会随 setState 调用而改变。
批处理在 React 18 之前只在合成事件里生效,18 之后 automatic batching 扩展到了 setTimeout、Promise 回调等场景。

```js
// React 17 及之前：这会触发两次渲染
setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
}, 1000);
// React 18：同样的代码，只触发一次渲染
```

## 2.useXxx闭包陷阱

一般发生在依赖状态变化的hooks里面。
这种常常发生在初始化只执行一次的useXxx（代指useEffect等函数）函数中，如果在这类函数中定义了闭包，而它的依赖又是空数组，那在闭包函数里面拿到的值永远是初始化的值，外界的变化不会导致他的更新。
比如

```js
import {useState,useMemo,useCallback} from 'react'
let timer=null
const [name,setName]=useState('')
useEffect(()=>{
console.log(name)//这里永远是初始值
},[])
<input value="{name}" onChange="(e)={setName(e.target.value)}"
```

需要将对应的响应式变量设置为依赖。

```js
useEffect(() => {
  console.log(name); //这里永远是初始值
}, [name]);
```

## 3.防抖/节流函数不生效(具体说是存在闭包函数不生效)

因为这个在防抖节流函数里很典型，所以拿来说一下。
这里只是拿防抖/节流函数举例子，对于所有用到闭包函数的这都是一个很好的例子。
当我们在代码里面书写一段比如下面的代码(因为这里没有jsx类型，我直接写写在js文件里举例)

```js
import  {debounce} from 'utils'//这里我已经封装好了防抖函数 网上搜一下有很多代码 我就不写了
import {useState} from 'react'
const handleClick=()=>{
console.log('按钮被点击')
}
const debounceFunction=()=>debounce(handleClick,300)
<button onClick="()=>{debounceFunction()}">点击</button>
```

上述代码看似不存在问题，但是在实际的过程中你会发现这个方法完全不起作用。
原因是因为debounce函数里面存在**闭包**,每一次的数据渲染都会导致整个页面的代码重执行，也就是说这里的debounceFunction一直在重新生成，旧的**闭包状态**丢失，所以没办法实现防抖的效果。（防抖/节流主要就是靠闭包
状态对上一次执行的时间进行缓存）。
解决方法就是使用**useCallback或者是useMemo进行包裹**，缓存这个函数防止重新创建。

```js
import  {debounce} from 'utils'//这里我已经封装好了防抖函数 网上搜一下有很多代码 我就不写了
import {useState,useMemo,useCallback} from 'react'
const handleClick=()=>{
console.log('按钮被点击')
}
const debounceFunction=useMemo(()=>debounceClick(handleClick,3000),[])
//或者是 const debounceFunction=useCallback(()=>debounceClick(handleClick,3000),[])

<button onClick="()=>{debounceFunction()}">点击</button>
```

除了上述问题，还会存在第二种情况的闭包陷阱，比如你的handleClick传递了参数，但是你的useMemo/useCallback没有将其设置为依赖,比如：

```js
import  {debounce} from 'utils'//这里我已经封装好了防抖函数 网上搜一下有很多代码 我就不写了
import {useState,useMemo,useCallback} from 'react'
const [name,setName]=useState('')
const handleClick=()=>{
console.log(name)//这里的name在没有被设置为依赖的时候永远是初始值
}
const debounceFunction=useMemo(()=>debounceClick(handleClick,3000),[])
//解决方案：const debounceFunction=useMemo(()=>debounceClick(handleClick,3000),[name])

<input value="{name}" onChange="(e)={setName(e.target.value)}">
```

这也是一个比较容易踩坑的点。

## 延伸：状态赋值函数的懒初始化

关于setState还有一个很值得关注的点,就是**懒初始化**，比如在下列代码中。

```js
import { useState } from "react";
const fn = (num) => num + 1;
const [value, setValue] = useState(() => fn());
const [value1, setValue1] = useState(fn());
```

这两段代码我们在**执行逻辑**上看结果似乎完全一样，但是在状态变化时却会发生截然不同的行为。
原因是React 对 useState 的入参做了类型判断——如果传入的是函数，就把它当作"惰性初始值生成器"，只在挂载时调用一次；如果直接传值（哪怕这个值是函数调用的返回结果），每次渲染都会重新计算这个表达式，只是计算结果在非首次渲染时被丢弃不用。所以确实应该优先用惰性初始化，尤其当初始值计算成本较高时（比如从 localStorage 读取、做复杂运算等）
value的占位存在，所以当状态更改导致页面逻辑重执行的时候，会认为这里已经有占位所以不会再执行这个赋值函数。
而value1此刻的占位是空，所以还会再执行一遍，所以当我们的赋值函数含有大量逻辑代码时，如果使用value1的赋值写法会导致资源的浪费，建议使用value的赋值写法。这种写法我们称之为**懒初始化**。

## 如何判断是否进入了闭包陷阱

当你在 useEffect、useCallback、useMemo 或事件处理函数中，发现某个变量的值“停滞”在旧状态，但页面其他地方已经更新了——大概率就是闭包陷阱。

### 排查步骤：

1. 检查该函数是否使用了 useState 或 props 中的变量。

2. 检查函数的依赖数组是否包含了这些变量。

3. 如果是防抖/节流函数，检查它是否被 useCallback/useMemo 缓存。

4. 如果用了 useEffect，检查是否有“清理函数”释放了旧资源。
