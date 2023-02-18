function batt(value){
    var elem = document.getElementById("battPers");
    elem.style.width = value + '%';
}
function battV(value){
    var elem = document.getElementById("battVal");
    elem.innerHTML  = value;
}

window.addEventListener("load", function() {
    loop2()
  });
  
function loop2(){
    navigator.getBattery().then(function(battery) {
    var level = battery.level;
    level = level * 100;
    level = Math.round(level);
    batt(level);battV(level);});
    setTimeout(loop2, 6000)
}