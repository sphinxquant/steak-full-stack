import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default [
  {
    preserveModules: true,
    input: 'src/index.ts',
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
    ],
    output: [{ dir: './dist', format: 'cjs', sourcemap: false }],
  },
];
