const appRoot = require('app-root-path');
const { pathsToModuleNameMapper } = require('ts-jest');

const packageJson = require(`${process.cwd()}/package.json`);
const packageName = packageJson.name ?? 'plate';
const { compilerOptions: baseTsConfig } = require(
  `${appRoot}/tooling/config/tsconfig.test.json`
);

// Take the paths from tsconfig automatically from base tsconfig.json
// @link https://kulshekhar.github.io/ts-jest/docs/paths-mapping
const getTsConfigBasePaths = () => {
  return baseTsConfig.paths
    ? pathsToModuleNameMapper(baseTsConfig.paths, {
        prefix: '<rootDir>/',
      })
    : {};
};

const aliases = require(`${appRoot}/tooling/config/aliases.cjs`);

const modules = {};

Object.keys(aliases).forEach((key) => {
  const value = aliases[key];

  modules[`^${key}$`] = `<rootDir>/packages/${value}/src`;
  modules[`^${key}/react$`] = `<rootDir>/packages/${value}/src/react`;
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
// @ts-check
module.exports = {
  collectCoverageFrom: [
    'packages/**/src/**/*.{ts,tsx}',
    '!**/*.styles.ts*',
    '!**/index.ts*',
    '!**/*test*/**',
    '!**/*fixture*/**',
    '!**/*template*/**',
    '!**/*stories*',
    '!**/*.development.*',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', String.raw`\.d\.ts$`],
  displayName: packageName,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/tooling/config/styleMock.cjs',
    ...getTsConfigBasePaths(),
    ...modules,
  },
  modulePathIgnorePatterns: ['<rootDir>/packages/common/dist/'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/tooling/config/setupTests.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/playwright/', '/packages/cli/'],
  testRegex: '(test|spec).tsx?$',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(' +
      'cheerio|react-dnd|dnd-core|@react-dnd|react-dnd-html5-backend|react-tweet|unified' +
      '|remark-.*' +
      '|mdast-.*' +
      '|micromark.*' +
      '|unist-.*' +
      '|markdown-table' +
      '|parse-entities' +
      '|character-.*' +
      '|estree-.*' +
      '|is-decimal' +
      '|is-hexadecimal' +
      '|is-alphanumerical' +
      '|is-alphabetical' +
      '|is-alphanumeric' +
      '|stringify-entities' +
      '|zeed-dom' +
      '|lowlight' +
      // '|markdown-.*' +
      '|mdast-util-to-markdown|zwitch|longest-streak|unist-util-visit|mdast-util-phrasing' +
      '|escape-string-regexp|micromark-util-decode-string|decode-named-character-reference' +
      '|ccount|bail|devlop|is-plain-obj|trough|vfile|vfile-message' +
      '|is-reference|is-buffer|@types/unist' +
      '|unist-util-stringify-position|mdast-util-from-markdown|mdast-util-to-string' +
      ')/)',
  ],
  watchman: false,
};
