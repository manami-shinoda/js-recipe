const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

/*
addButton.onclick = function() {
  //追加ボタンを押したら
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = inputElement.value

  // card を作成
  const card = document.createElement("div") //creteElemet は要素を作成
  card.className = "card" //クラス名を変更

  // todo を作成
  const todo = document.createElement("div")
  todo.className = "todo" //クラス名を変更
  todo.textContent = text //textContentを変更

  // todo を card の中に追加する
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  // card を container の中に追加する
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}
*/

addButton.onclick = function() {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}

const createCard = function(text) {
  const card = document.createElement("div") //creteElemet は要素を作成
  card.className = "card" //クラス名を変更

  // todo を作成
  const todo = document.createElement("div")
  todo.className = "todo" //クラス名を変更
  todo.textContent = text //textContentを変更

  // todo を card の中に追加する
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  // card を container の中に追加する
  container.append(card)

  return card
}
