const presets = [
  ['@babel/preset-env', {
    targets: {
      electron: '2'
    },
    useBuiltIns: 'usage'
  }],
  ['@babel/preset-react']
]

module.exports = { presets }

