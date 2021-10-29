const { build } = require('esbuild');

const IS_DEV = process.env.NODE_ENV === '"development"';

build({
  target: 'es2015',
  platform: 'browser',
  entryPoints: ['src/index.tsx'],
  outdir: 'public',
  bundle: true,
  minify: !IS_DEV,
  sourcemap: IS_DEV
}).catch(err => {
  console.error(`Error: ${JSON.stringify(err)}`);
});
