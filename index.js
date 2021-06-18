
document.querySelector(".btn-click").addEventListener("click",nameFormat);

function generateScore() {

  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;  var yourName = document.getElementById('yourName').value;
  var yourName = document.getElementById('yourName').value;
  var crushName = document.getElementById('crushName').value;

  document.querySelector(".loveValue").innerHTML = loveScore + "%";
  if(loveScore >= 80){
    document.querySelector(".loveMsg").innerHTML = "Wow, perfect compatibility! You are the toast to " + crushName + "'s butter ❤️";
  }
  else if(loveScore < 80 && loveScore >= 60){
    document.querySelector(".loveMsg").innerHTML = "Awesome compatibility! If " + crushName + " knows what love is, it is because of you 💌 ";
  }
  else if(loveScore < 60 && loveScore >= 30){
    document.querySelector(".loveMsg").innerHTML = "Sometimes it is not about how compatible you are but how you deal with incompatibility! Love is about learning and understanding each other 🥰 ";
  }
  else{
    document.querySelector(".loveMsg").innerHTML = crushName + " could be waiting for you to get to know you more! Everything will work out at the end, and you don't always know how. You just have to trust it will.";
  }
}

function nameFormat(){
  var yourName = document.getElementById('yourName').value;
  var crushName = document.getElementById('crushName').value;
  if(yourName === ""||crushName ===""){
    alert("Please enter both your name and your crush's name.");
  }
  else if(!isNaN(yourName)){
    alert("Please only use letters.");
  }
  else{
     generateScore();
    printMsg();
  }
}
