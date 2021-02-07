import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

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
