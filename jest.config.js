module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|ss|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/styleMock.js",
    "\\.(scss|css|less)$": "<rootDir>/__mocks__/fileMock.js"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupTestFrameworkScriptFile: "<rootDir>/__test__/setupEnzyme.ts",
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
