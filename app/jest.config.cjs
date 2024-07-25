module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/mocks/styleMock.js',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/src/mocks/fileMock.js',
    '^react-leaflet$': '<rootDir>/src/mocks/react-leaflet.js',
    '^leaflet$': '<rootDir>/src/mocks/leaflet.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  }
};
