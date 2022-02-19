module.exports = {
  resetMocks: true,
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  collectCoverage: false,
  collectCoverageFrom: [
    'packages/**/*.ts(x)?',
    '!packages/**/*.stories.tsx',
    '!packages/**/*.d.ts',
    '!packages/**/*.mock.ts(x)?',
    '!packages/**/*.spec.ts(x)?',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
