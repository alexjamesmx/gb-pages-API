const fsAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Async");
        }, 2000)
      : reject(new Error("error"));
  });
};

const anotherFn = async () => {
  const something = await fsAsync();
  console.log(something);
  console.log("hello");
};

console.log("before");
anotherFn();
console.log("after");
