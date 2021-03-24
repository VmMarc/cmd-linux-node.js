const readlineSync = require('readline-sync')
const { renameSync } = require('fs')
const { existsSync } = require('fs')

if (process.argv.length !== 2){
  console.log('usage: node rename.js')
  process.exit(1)
}

while (true) {
  let fileName = ''
  let newFileName = ''

  while (fileName.length === 0) {
    fileName = readlineSync.question('\nWhat\'s the name of the file\nor directory you want to modify? ')
    if (fileName.length === 0) {
      console.log('Error: file name is empty.') 
  } else if (existsSync(`${fileName}`) === false){
      console.log(`Error: "${fileName}" not found.`)
    }
  }

  while (newFileName.length === 0) {
    newFileName = readlineSync.question('\nWhat\'s the new name of the file\nor directory you want to modify? ')
    if (newFileName.length === 0) {
      console.log('Error: new file name is empty.')
    } else if (existsSync(`${newFileName}`) === true){
      console.log(`Error: "${newFileName}" already exist.`)
    }
  }
  renameSync(fileName, newFileName)
  console.log (`\n${fileName} a bien été modifié en : ${newFileName}.`)
}

