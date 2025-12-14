import { type RuleSetRule } from "webpack"

export function buildLoaders(): RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.css$/i,
        use: [
            "style-loader",
            "css-loader",
            "postcss-loader"
        ]
    }

    return [
        tsLoader,
        cssLoader
    ]
}