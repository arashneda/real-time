const textAreaEl = document.getElementById("textarea");
const totalCountEl = document.getElementById("totalcount");
const remainingCountEl = document.getElementById("remainingcount");

console.log(textAreaEl);
console.log(totalCountEl);
console.log(remainingCountEl);

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});
updateCounter()

function updateCounter() {
  totalCountEl.innerText = textAreaEl.value.length;

  remainingCountEl.innerText = textAreaEl.getAttribute("maxlength")-(textAreaEl.value.length)
}
