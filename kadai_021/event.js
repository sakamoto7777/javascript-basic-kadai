const btndown = document.getElementById("btn");
const textbtn = document.getElementById("text");



btndown.addEventListener("click",()=>{
  setTimeout(()=>{
  textbtn.textContent = "ボタンをクリックしました";
  },2000);
});