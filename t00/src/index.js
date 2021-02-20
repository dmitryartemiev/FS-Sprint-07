import "./style.css";

const $counter = document.getElementById("counter");

let expiring = new Date();
expiring.setTime(expiring.getTime() + 5000);

function getCookie(name) {
    if(name){
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
    }else{
        return false
    }
  }



document.addEventListener("DOMContentLoaded", (evt) => {

  if (!getCookie('counter')) {
    let counter = "0";
    document.cookie = `counter=${counter}`;
    $counter.innerHTML = counter
  } else {
    let counter = getCookie("counter");
    counter = Number(counter);
    counter++;
    counter = JSON.stringify(counter);
    document.cookie = `counter=${counter}; max-age=60`;
    $counter.innerHTML = counter;
    setInterval(() => {
        $counter.innerHTML = 0;
    }, 60000);
  }

});




setTimeout(() => {
console.log(counter);
}, 500);

