module.exports = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom'
};
