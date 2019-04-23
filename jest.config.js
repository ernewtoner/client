module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  transform: {
    "^.+\\.jsx$": 'babel-jest'
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
  ],
};

