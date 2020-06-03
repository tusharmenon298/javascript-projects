let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "#31E944";
    }
    else if (count < 0) {
      value.style.color = "#FF0003";
    }
    else{
      value.style.color = "#333";
    }
    value.textContent = count;
  });
});
