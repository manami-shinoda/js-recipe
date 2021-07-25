const number = 0

const GenkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!")
    } else if (n % 10 === 3) {
      console.log(n + "!!!!!!")
    } else if (String(n).match(/3/)) {
      //nをstring型に変換し、3が含まれているか調べる！
      console.log(n + "!!!!!!")
    } else {
      console.log(n)
    }
  }
}
