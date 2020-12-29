import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default [
  {
    input: 'src/index.tsx',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
        declarationDir: './dist',
        tsconfigOverride: { compilerOptions: { module: 'es2015' } },
      }),
    ],
    output: [{ dir: './dist', format: 'cjs', sourcemap: false }],
  },
];
