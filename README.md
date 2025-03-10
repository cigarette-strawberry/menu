# 想法思路

## 应该做整体的拆分

breadcrumb //面包屑
content //主体内容
footer //底部
header //头部
logo //Logo
menu //菜单
sider //侧边栏
tab //标签页

header 组件和 sider 组件使用 id 标记位置

menu 组件使用 Teleport 根据不同的布局状态 传送到 header 组件和 sider 组件中

数据目前都是静态
