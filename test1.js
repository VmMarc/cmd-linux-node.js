const readlineSync = require('readline-sync')

// Check command line
if (process.argv.length !== 3) {
  console.log('usage: node majorityTest.js age')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number`)
  process.exit(1)
}

const majority = Number(process.argv[2])

while (true) {
  let name = ''
  let firstName = ''
  let age = ''

  // get name and check if name is empty
  while (name.length === 0) {
    name = readlineSync.question('nom: ')
    if (name.length === 0) {
      console.log('Sorry, name is empty')
    }
  }

  // get first name and check if first name is empty
  while (firstName.length === 0) {
    firstName = readlineSync.question('firstName: ')
    if (firstName.length === 0) {
      console.log('Sorry, first name is empty')
    }
  }

  // get age and check if age is a number
  while (age.length === 0 || isNaN(age)) {
    age = readlineSync.question('age: ')
    if (age.length === 0) {
      console.log('Sorry, age is empty')
      continue
    }
    if (isNaN(age)) {
      console.log(`Sorry, ${age} is not a number`)
      continue
    }
  }

  age = Number(age)

  if (age >= majority) {
    console.log(`${firstName} ${name} vous êtes majeur, vous pouvez voter.`)
  } else {
    console.log(
      `Désolé, ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter.`
    )
  }
}