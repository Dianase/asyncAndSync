const fs = require('fs')

//READ FILE SYNCHRONOUSLY

const data = fs.readFileSync('./data.json')
console.log(data.toString())


//READ FILE ASYNCHRONOUSLY

fs.readFile('./data.json', (err, someData)=>{
  console.log(someData.toString())
})