import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';

import pkg from './package.json';

export default [
  {
    input: 'src/index.tsx',
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(pkg.dependencies || {}),
    ],
    plugins: [
      url(),
      typescript({
        tsconfig: './tsconfig.build.json',
        target: 'es5',
      }),
      commonjs(),
    ],
    output: [{ dir: './dist', sourcemap: true }],
  },
];
