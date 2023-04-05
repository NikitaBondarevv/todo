module.exports = {
  verbose: true,
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.(gif|jpeg|png)$': '<rootDir>/src/__mocks__/mockFile.ts',
    '^contracts/(.*)$': '<rootDir>/src/contracts/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^store$': '<rootDir>/src/store/index.ts',
    '^helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^pages$': '<rootDir>/src/pages/index.tsx',
    '^__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
  },
  testEnvironment: 'jsdom',

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
