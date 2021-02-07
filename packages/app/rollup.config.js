import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';

import pkg from './package.json';

export default [
  {
    preserveModules: true,
    input: 'src/index.tsx',
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(pkg.dependencies || {}),
    ],
    plugins: [
      url(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declarationDir: './dist',
        tsconfigOverride: { compilerOptions: { module: 'es2015' } },
      }),
      commonjs(),
    ],
    output: [{ dir: './dist', sourcemap: true }],
  },
];
