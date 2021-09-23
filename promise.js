//PROMISES THAT RETURN SOMETHING

const { resolve } = require("path/posix")

getName()
  .then(name => {
    console.log('Hello' + name)
  })

//////////////////////////////////

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello world');
  }, 2000);
});

const promise = new Promise((resolve, reject) => {
  reject('hello');
});

promise
  .then(() => console.log('wont log'))
  .catch((e) => console.log(e));


////////////////////////////////////

Promise.all([p1, p2]).then((values) => console.log(values))