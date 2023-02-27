const chokidar = require('chokidar')
const { readFileSync, existsSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const chalk = require('chalk')

// paths
const root = process.cwd()
const lib = resolve(root, 'lib')
const test = resolve(root, 'test')

// RegExp
/* /lib/$NUMBER_QUESTION.js */
const fileReg = new RegExp(`(?<=${lib + '/'}).+(?=\.js)`)
/* var $FUNCTION_NAME = function */
const fnNameReg = /(?<=var ).*(?= \= function)/

// utils
const log = (msg) => console.log(chalk.green(msg))
const err = (msg) => console.log(chalk.red(msg))
const sleep = (delay) => new Promise((res) => setTimeout(res, delay))

const fetchQuestion = (path) => {
  const content = readFileSync(path, 'utf-8')
  const functionName = content.match(fnNameReg)[0]

  return { content, functionName }
}

const addExports = (path) => {
  try {
    const { content, functionName } = fetchQuestion(path)

    const exportStr = `module.exports = { ${functionName} }`

    if (!content.includes(exportStr)) {
      writeFileSync(path, content + '\n' + exportStr, 'utf-8')
    }
  } catch (e) {
    err(`[addExports]: `, e)
  }
}

const generateBaseTestFile = (path) => {
  try {
    const { functionName } = fetchQuestion(path)
    const fileName = path.match(fileReg)[0]
    const testFileName = fileName.replace(/\d*\./, '')
    const targetPath = resolve(test, `${testFileName}.test.js`)

    const isExisted = existsSync(targetPath)
    if (isExisted) {
      return
    }

    const template = `const { ${functionName} } = require('../lib/${fileName}.js')

describe('test ${fileName}.js', () => {
  test('${testFileName}', () => {
    expect(${functionName}()).toBe()
  })
})
`

    writeFileSync(targetPath, template, 'utf-8')
    log(`generate test file for [${testFileName}] successfully!`)
  } catch (e) {
    err(`[generateBaseTestFile]: `, e)
  }
}

chokidar.watch(lib).on('add', async (path) => {
  await sleep(1000) // promise that leetcode-cli done

  generateBaseTestFile(path)
  addExports(path)
})
