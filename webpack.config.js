const path = require("path");
module.exports = {
    // 'development' = 개발모드, 'production = 배포모드
    mode: "production",
    entry: "./webpack.config.js",

    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {}
}