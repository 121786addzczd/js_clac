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
