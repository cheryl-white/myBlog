---
outline: deep
lastUpdated:true
---

## Results

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
const lists=[{name:"nextjs使用",title:"nextjs使用"}]
</script>
<div style="height:100%;width:100%;display:flex;justify-content:start;">
<List :lists="lists"/>
</div>
```
