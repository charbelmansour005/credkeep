/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  jest: {
    moduleNameMapper: {
      axios: "axios/dist/node/axios.cjs",
    },
  },
}
