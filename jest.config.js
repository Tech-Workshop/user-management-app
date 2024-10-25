// jest.config.js
module.exports = {
  testEnvironment: 'jsdom', // Use jsdom for DOM-related tests
  transform: {
      '^.+\\.js$': 'babel-jest', // Use babel-jest for transforming JavaScript files
  },
  moduleFileExtensions: ['js'], // Specify file extensions to recognize
};
