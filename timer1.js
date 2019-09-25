const args = process.argv.slice(2);
let goodToGo = false;
const passingArray = [];

if (args.length === 0) {
  console.log(args, "What!!! I need input!!!");
  goodToGo = false;
} else {
  for (const element of args) {
    if (element >= 0) {
      passingArray.push(Number(element));
      goodToGo = true;
    }
  }
}

const timer = (array) => {
  console.log(array.sort());

  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      return process.stdout.write('\x07');
    }, array[i] * 1000);
  }
};

goodToGo ? timer(passingArray) : console.log("no boueno!");

// module.export = timer;
