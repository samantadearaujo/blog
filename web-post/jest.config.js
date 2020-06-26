const {defaults} = require('jest-config');
module.exports = {
    rootDir: '.',
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/__tests__/*'],
    coverageThreshold: {
      global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
      }
    }
  };