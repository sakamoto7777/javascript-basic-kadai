const btndown = document.getElementById("btn");
const textbtn = document.getElementById("text");



btndown.addEventListener("click",()=>{
  textbtn.textContent = "ボタンをクリックしました";
});