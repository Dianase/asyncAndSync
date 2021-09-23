//When the keyword Async is in front of function it will ALWAYS return a promise
//You can use await only with async functions

// const promise = new Promise((resolve)=> {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000)
// })


// async function returnsPromise(){
//   const value = await promise;
//   console.log(value);
//   return 'hello';
// }

// returnsPromise().then();


//CREATE  A PROMISE IN A ASYNC 

const promise = new Promise((resolve)=> {
  setTimeout(() => {
    resolve(5);
  }, 2000)
})

async function asyncFunc(){
  const theActualPromise = await promise; //await only works in a async function
  console.log(theActualPromise);
  return 'wat up';
}

asyncFunc().then();