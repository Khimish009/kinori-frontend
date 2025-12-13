export type BuildPaths = {
    entry: string;
    build: string,
    html: string
}

export type BuildOptions = {
    mode: "development" | "production",
    paths: BuildPaths,
    isDev: boolean,
}