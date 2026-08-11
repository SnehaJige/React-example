const promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    const loading = false;
    if(loading){
        resolve("Success Loading");
    }else {
        reject("Fail to load");
    }
  },3000);
})
promise.then((mess) => {
    console.log(mess);
})
.catch((err) => {
    console.log("Error-->>>", err);
})
.finally(() => {
    console.log("Promise has been fully loaded!!!");
})