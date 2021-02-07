import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

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
      commonjs(),
    ],
    output: [{ dir: './dist', format: 'cjs', sourcemap: true }],
  },
];
