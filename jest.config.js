module.exports = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
  moduleNameMapper: {
    '\\.(css|png)$': 'identity-obj-proxy',
    '^contracts/(.*)$': '<rootDir>/src/contracts/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^store$': '<rootDir>/src/store/index.ts',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^pages$': '<rootDir>/src/pages/index.tsx',
  },
  testEnvironment: 'jsdom'
};
