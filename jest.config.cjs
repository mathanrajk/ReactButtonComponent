module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // This safely mocks your CSS imports so Jest doesn't crash
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};