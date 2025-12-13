import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { BuildPaths } from './types/config';

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}