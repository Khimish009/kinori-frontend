import { type RuleSetRule } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader: RuleSetRule = {
        test: /\.css$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    sourceMap: options.isDev,
                    importLoaders: 1, // чтобы @import тоже проходил postcss
                },
            },
            {
                loader: "postcss-loader",
                options: { sourceMap: options.isDev },
            },
        ],
    }


    const svgLoader: RuleSetRule = {
        test: /\.svg$/i,
        oneOf: [
            {
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] },
                use: ["@svgr/webpack"],
            },
            {
                resourceQuery: /url/,
                type: "asset/resource",
            },
            {
                type: "asset/resource",
            }
        ],
    }

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif|woff2|woff)$/i,
        type: 'asset/resource',
        parser: {
            dataUrlCondition: {
                maxSize: 10 * 1024
            }
        }
    }



    return [
        tsLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ]
}