const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const mode = 'production'
const devtool = 'none'
const entry = {
    app: path.resolve(__dirname, '../src/components/index.js')
}
const output = {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
}
const plugins = [
    new CleanWebpackPlugin({}),
]
const resolve = {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: {},
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
                'css-min-loader',
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.less$/i,
            use: [
                'style-loader',
                'css-loader',
                'css-min-loader',
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

const externals = {
    'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    },
    'react-router': {
        root: 'ReactRouter',
        commonjs2: 'react-router',
        commonjs: 'react-router',
        amd: 'react-router'
    },
    'react-router-dom': {
        root: 'ReactRouterDOM',
        commonjs2: 'react-router-dom',
        commonjs: 'react-router-dom',
        amd: 'react-router-dom'
    }
}


const config = {
    mode,
    devtool,
    entry,
    output,
    plugins,
    resolve,
    module: _module,
    node,
    externals,
}

module.exports = config
