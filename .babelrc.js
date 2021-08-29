const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = isTest
  ? {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        '@babel/preset-typescript',
      ],
    }
  : {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            modules: false,
            debug: false,
            corejs: 3,
          },
        ],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
        '@babel/preset-typescript',
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    }
