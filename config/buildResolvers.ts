import type { ResolveOptions } from 'webpack';
import type { BuildPaths } from './types/config';

export function buildResolvers(paths: BuildPaths): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {}
    }
}