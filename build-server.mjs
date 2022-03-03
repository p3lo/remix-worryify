import esbuild from 'esbuild';

import NodeModulesPolyfill from '@esbuild-plugins/node-modules-polyfill';

import alias from 'esbuild-plugin-alias';

import NodeModule from 'module';
const { NodeModulesPolyfillPlugin } = NodeModulesPolyfill;
const { createRequire } = NodeModule;

const require = createRequire(import.meta.url);

async function build() {
  const mode = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required');
  }

  console.log(`Building Worker in ${mode} mode `);

  const outfile = './public/_worker.js';
  const startTime = Date.now();
  const result = await esbuild.build({
    entryPoints: ['./worker/index.ts'],
    bundle: true,
    minify: mode === 'production',
    sourcemap: mode !== 'production',
    incremental: mode !== 'production',
    format: 'esm',
    metafile: true,
    external: mode === 'production' ? ['*.development.js'] : ['*.production.js', '*.production.min.js'],
    define: {
      process: JSON.stringify({
        env: {
          NODE_ENV: mode,
          DATABASE_URL: process.env.DATABASE_URL,
        },
      }),
    },
    outfile,
    plugins: [
      NodeModulesPolyfillPlugin(),
      alias({
        '@prisma/client': require.resolve('@prisma/client'),
      }),
    ],
  });
  const endTime = Date.now();

  console.log(`Built in ${endTime - startTime}ms`);

  if (mode === 'production') {
    console.log(await esbuild.analyzeMetafile(result.metafile));
  }

  process.exit(0);
}

build().catch((e) => console.error('Unknown error caught during build:', e));
