const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack')

const mode = 'development'
const devtool = 'inline-source-map'
const entry = { app: path.resolve(__dirname, '../src/index.js') }
const output = {
    filename: 'app.[hash:4].js',
    path: path.resolve(__dirname, '../build'),
}
const plugins = [
    new DefinePlugin({ DEV: true }),
    new HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body', }),
]
const devServer = { port: 9100, hot: true }
const resolve = {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: { },
}
const _module = {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.less$/i,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                            // strictMath: true,
                        }
                    },
                }
            ],
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ['import', {
                            libraryName: 'antd',
                            libraryDirectory: 'es',
                            style: true // `style: true` 会加载 less 文件
                        }, 'antd-import'],
                    ],
                }
            }
        },
    ]
}
const node = { fs: 'empty' }

const config = {
    mode,
    devtool,
    entry,
    output,
    plugins,
    resolve,
    module: _module,
    node,
    devServer,
}

module.exports = config