import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import autoprefixer from "autoprefixer";

const watch = process.argv.includes("--watch");

const args = {
    entryPoints: ['./scss/luxbar.scss'],
    //outfile: 'build/luxbar.css',
    outdir: 'build',
    bundle: true,
    minify: true,
    platform: 'browser',
    sourcemap: true,
    target: 'esnext',
    plugins: [
        sassPlugin({
            async transform(source) {
                const { css } = await postcss([autoprefixer]).process(source, {
                    from: undefined,
                });
                return css;
            },
        }),
    ],
};

(async () => {
    let ctx;
    if (watch) {
        ctx = await esbuild.context(args);
        await ctx.watch();
        console.log("watching...");
    } else {
        ctx = await esbuild.build(args);
        console.log("build successful");
    }
})();