/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
    /*
    "moduleNameMapper": {
        "d3": "<rootDir>/node_modules/d3/dist/d3.min.js",
        "^d3-(.*)$": "<rootDir>/node_modules/d3-$1/dist/d3-$1.min.js",
        "@mui": "<rootDir>/node_modules/@mui/dist/d.min.js"
    },
    "transform": {
        "^.+\\.ts": "ts-jest",
        "^.+\\.tsx": "ts-jest"
    },
    "transformIgnorePatterns": [
        "<rootDir>/node_modules/(?!d3|d3-array|d3-scale|@mui|internmap|delaunator|robust-predicates)"
    ]
  */
};
