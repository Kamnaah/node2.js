const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is username? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Hello ${answer}`);

 rl.close();
});