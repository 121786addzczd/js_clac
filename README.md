# 実装課題　電卓
## JavaScriptで簡単な電卓アプリを作りました。
ボタン入力とキーボード入力どちらも対応可能となっております。
[![Image from Gyazo](https://i.gyazo.com/3e0ff2638def53eea4fe8b1e935930d2.png)](https://gyazo.com/3e0ff2638def53eea4fe8b1e935930d2)

[![Image from Gyazo](https://i.gyazo.com/2cbf6b68ee1fe0b280ec6fd2d7761b03.gif)](https://gyazo.com/2cbf6b68ee1fe0b280ec6fd2d7761b03)

*index.html* 
```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container">
    <div  id="output" class="display"></div>
    <div class="btn_box">
      <button class="ac_btn" onclick="reset()">AC</button>
      <button onclick="set(this)">/</button>
      <button onclick="set(this)">7</button>
      <button onclick="set(this)">8</button>
      <button onclick="set(this)">9</button>
      <button onclick="set(this)">*</button>
      <button onclick="set(this)">4</button>
      <button onclick="set(this)">5</button>
      <button onclick="set(this)">3</button>
      <button onclick="set(this)">-</button>
      <button onclick="set(this)">1</button>
      <button onclick="set(this)">2</button>
      <button onclick="set(this)">3</button>
      <button class="plus_btn" onclick="set(this)">+</button>
      <button onclick="set(this)">.</button>
      <button onclick="set(this)">0</button>
      <button onclick="calc(this)" keydown="calc(this)">=</button>
    </div>
  </div>
  <script src=main.js></script>
</body>
</html>
```

*main.js*
```
const display = document.getElementById('output');
const maxlength = 8;

function set(nums) {
  display.textContent += nums.textContent;
}

function calc() {
  display.textContent = new Function("return " + display.textContent)();
  display.textContent = display.textContent.substring( 0, 8 );
}

function reset() {
  display.textContent = "";
}

document.body.addEventListener('keydown', event => {
  !isNaN(event.key)? display.textContent += event.key : "";

  if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    display.textContent += event.key
  }

  event.key === '='? calc() : "";

  event.keyCode == 8?  display.textContent = display.textContent.slice(0, -1) : "";
});

```

*style.css*
```
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  font-family: "Arial", sans-serif;
  background: #181818;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.container {
  width: 360px;
  height: 500px;
  background: #222222;
  border-radius: 6px;
  box-shadow: 0 6px 10px 3px rgba(0, 0, 0, .3);
}

.display {
  height: 80px;
  line-height: 80px;
  font-size: 3rem;
  background: #151515;
  color: #18e244;
  margin: 10px 10px 5px 10px;
  padding: 5px;
  letter-spacing: 2px;
  text-align: right;
  overflow: hidden;
}

.btn_box {
  width: 360px;
  height: 400px;
  display: grid;
  grid-template-rows: repeat(5, 80px);
  grid-template-columns: repeat(4, 80px);
  justify-content: center;
  align-items: stretch;
}

.btn_box > button {
  margin: 3px;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  background: linear-gradient(to left, #0c375d, #6391b0);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
}

.btn_box > .ac_btn {
  grid-row: 1/2;
  grid-column: 1/4;
  background: linear-gradient(to left, #531740, #ff0ed7);
}

.btn_box > .plus_btn {
  grid-row: 4/6;
  grid-column: 4/5;
}
```

