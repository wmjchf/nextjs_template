# pump

- 技术栈：nextjs、tailwindcss

## 项目启动

```
pnpm install

npm run dev
```

## 打包模式

因为考虑到前期项目刚刚启动，暂时先采用静态导出的模式。执行命令`npm run build`，`out`文件夹下即是生产文件。配置如下：

```js
{
  output: "export",
}
```

当有一定用户量之后，后面会采用 nodejs 服务端渲染。
