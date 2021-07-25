const number = 0

const GenkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!")
    } else {
      console.log(n)
    }
  }
}
