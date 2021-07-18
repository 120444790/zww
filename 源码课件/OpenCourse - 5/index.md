# 小程序项目实战

## 理清需求/要实现的内容

1. 首页
2. slider
3. 文章/视频的列表，可以滚动
4. 倒计时和日期的展示，首页日期展示的 abtest
5. 列表里可以搜索
6. 详情页
7. 封装 request
8. 虚拟列表
9. 装饰器

### 虚拟列表

虚拟列表的实现，实际上就是在首屏加载的时候，只加载可视区域内需要的列表项，当滚动发生时，动态通过计算获得可视区域内的列表项，并将非可视区域内存在的列表项删除。

计算当前可视区域起始数据索引(startIndex)

计算当前可视区域结束数据索引(endIndex)

计算当前可视区域的数据，并渲染到页面中

计算 startIndex 对应的数据在整个列表中的偏移位置 startOffset 并设置到列表上

由于只是对可视区域内的列表项进行渲染，所以为了保持列表容器的高度并可正常的触发滚动，将 Html 结构设计成如下结构：

infinite-list-container 为可视区域的容器

infinite-list-phantom 为容器内的占位，高度为总列表高度，用于形成滚动条

infinite-list 为列表项的渲染区域

接着，监听 infinite-list-container 的 scroll 事件，获取滚动位置 scrollTop

假定可视区域高度固定，称之为 screenHeight

假定列表每项高度固定，称之为 itemSize

假定列表数据称之为 listData

假定当前滚动位置称之为 scrollTop

则可推算出：

列表总高度 listHeight = listData.length \* itemSize

可显示的列表项数 visibleCount = Math.ceil(screenHeight / itemSize)

数据的起始索引 startIndex = Math.floor(scrollTop / itemSize)

数据的结束索引 endIndex = startIndex + visibleCount

列表显示数据为 visibleData = listData.slice(startIndex,endIndex)

当滚动后，由于渲染区域相对于可视区域已经发生了偏移，此时我需要获取一个偏移量 startOffset，通过样式控制将渲染区域偏移至可视区域中。

偏移量 startOffset = scrollTop - (scrollTop % itemSize);

作者：DdShare
链接：https://www.jianshu.com/p/15cc08ec366a
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
