import esbuild from "esbuild";
import config from "./package.json" assert { type: "json" };

const watch = process.argv.includes("--watch");

const bannerComment = `/* ${config.name} ${config.version} | ${config.license} License | ${config.homepage} */`;

const args = {
    entryPoints: ['./css/luxbar.css'],
    outdir: 'build',
    bundle: true,
    minify: false,
    platform: 'browser',
    sourcemap: true,
    target: 'ie11',
    banner: { css: bannerComment },
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