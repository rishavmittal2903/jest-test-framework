module.exports = {
  // Flag to indicate if Code Coverage to be collected and reported
  collectCoverage: true,
  clearMocks: true,
  
  coverageThreshold: {
    global: {
      branches: 190,
      functions: 190,
      lines: 190,
      statements: 190
    },
  },
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  // An array of glob patterns indicating a set of files for which coverage 
 // information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs,html,htm}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage'
}