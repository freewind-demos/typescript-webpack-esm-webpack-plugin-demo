Webpack Config "esm-webpack-plugin" Demo
======================================

当同时使用typescript与`esm-webpack-plugin`的时候，需要注意的是，在`tsconfig.json`中，
`module`的值，不能是`commonjs`，而应该是`esnext`或者`es6`，这样typescript生成的javascript代码，
才能正确被webpack找到其export的值，从而被esm-webpack-plugin正确处理。

```
npm install
npm run demo
```
