res.json().then(Promise.reject.bind(Promise))
  .then()
  .catch()


Promise
  .resolve(1)
  .then(function(test) {
    new Promise((resolve, reject) => {
      reject(test)
    })
  })
  .catch((err) => {
    console.log(err)
  })

Promise
  .resolve(1)
  .then(function(test) {
    return new Promise((resolve, reject) => {
      reject(test)
    })
  })
  .catch((err) => {
    console.log(err)
  })

Promise
  .resolve(1)
  .then(Promise.reject.bind(Promise))
  .catch((err) => {
    console.log(err)
  })

new Promise((resolve, reject) => {
  resolve(1)
})
  .then(console.log)

new Promise((resolve, reject) => {
  return resolve(1)
})
  .then(console.log)

new Promise((resolve, reject) => {
  reject(1)
})
  .catch(console.log)

new Promise((resolve, reject) => {
  return reject(1)
})
  .catch(console.log)

Promise
  .resolve(1)
  .then(Promise.resolve.bind(Promise))
  .then((err) => {
    console.log(err)
  })

Promise
  .resolve(1)
  .then((test) => {
    Promise.resolve(test)
  })
  .then((err) => {
    console.log(err)
  })