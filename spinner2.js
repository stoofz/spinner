let time = 100;
const spinnerArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
for (let x = 0; x < 50; x++) {
  for (const spin of spinnerArray) {
    setTimeout(() => {
      process.stdout.write(spin);
    }, time);
    time += 200;
  }
}