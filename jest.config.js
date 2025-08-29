const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/.storybook/',
    '<rootDir>/storybook-static/',
  ],
  // Ignore stories files from test discovery
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/*.(test|spec).(ts|tsx|js|jsx)',
    '!**/*.stories.*',
  ],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
    // Exclude stories files
    '!src/components/**/*.stories.{ts,tsx}',
    // Exclude TypeScript declaration files
    '!src/components/**/*.d.ts',
    // Exclude index files (usually just exports)
    '!src/components/**/index.{ts,tsx}',
    // Exclude specific components that don't need coverage yet
    '!src/components/atoms/colors/Colors.tsx',
  ],
  // Temporarily disable coverage thresholds until you have actual tested components
  coverageThreshold: {
    global: {
      branches: 0, // Will increase as you add tests
      functions: 0, // Will increase as you add tests
      lines: 0, // Will increase as you add tests
      statements: 0, // Will increase as you add tests
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // Optional: Configure coverage reporting
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverage: false, // Set to true when you want to collect coverage
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
