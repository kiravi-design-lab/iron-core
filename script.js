document.addEventListener("DOMContentLoaded", function(){

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");


  hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// メニュークリックで閉じる
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

  const dateInput = document.getElementById("startDate");
  const today = new Date();
  today.setDate(today.getDate() + 3);

  const yyyy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,"0");
  const dd = String(today.getDate()).padStart(2,"0");

  dateInput.min = `${yyyy}-${mm}-${dd}`;

  dateInput.addEventListener("input", function(){
    const selected = new Date(this.value);
    if(selected.getDay() === 0){
      alert("日曜日は休館日のため選択できません。");
      this.value="";
    }
  });

  const form = document.getElementById("applyForm");
  const formInner = document.getElementById("formInner");
  const thanks = document.getElementById("thanksMessage");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    formInner.style.display="none";
    thanks.style.display="block";
  });

});
