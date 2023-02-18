function day(value){
    var elem2 = document.getElementById("dayPers");
    elem2.style.width = value + '%';
}
function dayV(value){
    var elem2 = document.getElementById("dayVal");
    elem2.innerHTML  = value;
}
// while(true){
    window.addEventListener("load", function() {
        loop()
      });
    
    function loop(){
        let d = new Date();
        let min = d.getMinutes();
        let hrs = d.getHours();
        let sec = d.getSeconds();
        sec = sec / 60;
        min = min + sec;
        min = min / 60;
        hrs = hrs + min;
        let percentage = hrs * 4.166667
        day(percentage)
        percentage = percentage * 100;
        percentage = Math.round(percentage);
        percentage = percentage / 100;
        dayV(percentage);
        1
        setTimeout(loop, 1000)
    }
// }