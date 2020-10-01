var countDownDate=new Date("FEB 14, 2021 15:37:25").getTime();

//update time every one second
var x=setInterval(function(){
    //get todays date and time
    var now=new Date().getTime();
    //found the distance between now and the countdown date
    var distance=countDownDate-now;
    //Time calculation for days, hour and seconds
    var days=Math.floor(distance / (1000*60*60*24));
    var hours=Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes=Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds=Math.floor((distance % (1000*60)) / 1000);

    //display the result in the element with id="image"
    document.getElementById("image").innerHTML=days + " DAY " +hours + " HOUR " + 
    minutes +" MINUTE " + seconds + " SECOND";

    //if the countdown is finished, write some text

    if (distance < 0){
        clearInterval(x);
        document.getElementById("image").innerHTML="GOODLUCK!";
    }
},1000);