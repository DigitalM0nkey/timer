const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("\nThanks for using me, ciao!");
    process.exit();
  } else if (key > 0 && key < 10) {
    process.stdout.write(`\r     => Setting timer for ${key} seconds`);
    spin(key);
    countdown(key);
  } else if (key === '\x62') {
    process.stdout.write('\x07');
  }
});

const spin = () => {
  const spinner = {
    0: '\r|   ',
    1: '\r/   ',
    2: '\r-   ',
    3: '\r\\   '
  };
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      return process.stdout.write(spinner[i]);
    }, i * 200);
  }
};

const countdown = (time) => {
  setTimeout(() => {
    return process.stdout.write('\x07');
  }, time * 1000);
};

