import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from 'copy-webpack-plugin';
import type { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            "__DEV__": JSON.stringify(options.isDev)
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: options.paths.locales,
                    to: 'locales'
                }
            ]
        })

    ]

    if (!options.isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].chunk.css",
        }))
    }

    return plugins
}