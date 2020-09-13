module.exports = {
  "moduleFileExtensions": [
    "js",
    "ts",
    "tsx"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "moduleNameMapper": {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
  },
  "setupFiles": [
    "<rootDir>__test__/enzyme-setup.ts"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
}