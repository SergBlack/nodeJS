// console.log(process.argv);

// eslint-disable-next-line no-unused-vars
const [exec, path, ...rest] = process.argv;

// console.log(exec, path, rest);

const result = rest.reduce((acc, num) => acc + Number(num), 0);

console.log(result);
