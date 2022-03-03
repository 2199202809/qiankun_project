const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");
const { resolve } = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  /*
  重点!!!
  项目打包部署的基本路径，一定要写且需要和项目运行地址保持一致，不然会出现无法读取到资源情况
  */
  publicPath: "http://localhost:8002/",
  devServer: {
    port: "8002", // 需要与主应用注册时的入口保持一致
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      /**
       * Webpack 5 会从 package.json name 中自动推断出一个唯一的构建名称，并将其作为 output.uniqueName 的默认值。
       * 由于 package.json 中有唯一的名称，可将 output.jsonpFunction 删除。
       */
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
});
