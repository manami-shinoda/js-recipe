const figure = document.getElementById("figure")
//const squareButton = document.getElementById("square-button")
//const circleButton = document.getElementById("circle-button")

/*circleButton.onclick = function() {
  figure.classList.add("rounded")
}

squareButton.onclick = function() {
  figure.classList.remove("rounded")
}*/

figure.onmouseenter = function() {
  figure.classList.toggle("rounded") //クラス名が要素になければ追加・あれば削除
}
