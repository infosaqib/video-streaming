//Closures
function print(val) {
  console.log(val);
}

const myFunction = (callback) => {
  let format = "first console";
  print(format);
};

//Calbacks
myFunction(print("second console"));

//Promises
let sources = 50;
const invoices = new Promise((resolve, reject) => {
  if (sources === 50) {
    resolve("sources matched");
  }
  if (sources < 50) {
    reject("sources are less");
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

//Async/Await
async function generator(val) {
  const products = await fetch("https:dummyjson.com/product/1");
  const data = await products.json();
  console.log(data);
}
generator();
