const promise = newPromise((resolve,reject) => {

})


const cows = 5;

const countCows = new Promise((resolve,reject)=>{
    if(cows>10) return resolve('sii')
else return reject(new Error('noo'))
})

countCows.then((result)=>{
    console.log(result)
})
.catch(console.log)
.finally(()=>{
    console.log('termino')
})