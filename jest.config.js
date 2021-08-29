module.exports = {
  roots: ['<rootDir>/src'],
  displayName: 'react-kit',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  watchPlugins: [
    'jest-watch-typeahead/testname',
    'jest-watch-typeahead/filename',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
}
