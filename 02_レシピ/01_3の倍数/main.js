const number = 0

function sleep(waitMsec) {
  var startMsec = new Date()

  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}

const GenkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!")
      sleep(1000)
    } else if (n % 10 === 3) {
      console.log(n + "!!!!!!")
      sleep(1000)
    } else if (String(n).match(/3/)) {
      //nをstring型に変換し、3が含まれているか調べる！
      console.log(n + "!!!!!!")
      sleep(1000)
    } else {
      console.log(n)
      sleep(1000)
    }
  }
}
