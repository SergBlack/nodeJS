// run this file with command
// time node ./async/setImmediate_vs_nextTick.mjs blocked
// time node ./async/setImmediate_vs_nextTick.mjs nexttick
// time node ./async/setImmediate_vs_nextTick.mjs setimmediate

// operation will be equal = blocked | nexttick | setimmediate
const operation = process.argv[2];
let loops = 11;
let delay = 10;
let start = process.hrtime();

function run() {
  loops -= 1;

  for (let i = 0; i < 1e7; i += 1) {
    Math.pow(Math.random(), Math.random());
  }

  if (loops > 0) {
    switch (operation) {
    case "blocked": {
      run(); // I took 1536.0617ms, expected to take 10
      break;
    }
    case "nexttick": {
      process.nextTick(run); // I took 1515.9906ms, expected to take 10
      break;
    }
    case "setimmediate": {
      setImmediate(run); // I took 284.1285ms, expected to take 10
      break;
    }
    default: {
      break;
    }
    }
  }
}

setTimeout(() => {
  const [seconds, nanoSeconds] = process.hrtime(start);
  const msElapse = seconds * 1000 + nanoSeconds / 1e6;
  console.log(`I took ${msElapse}ms, expected to take ${delay}`);
}, delay);

run();
