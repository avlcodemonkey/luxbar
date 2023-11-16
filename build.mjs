import esbuild from "esbuild";

const watch = process.argv.includes("--watch");

const args = {
    entryPoints: ['./css/luxbar.css'],
    outdir: 'build',
    bundle: true,
    minify: true,
    platform: 'browser',
    sourcemap: true,
    target: 'ie11',
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