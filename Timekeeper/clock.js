var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

var showCurrentTime = function()
{
   
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 

	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
 
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
  
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var timekeeperImageJS = document.getElementById('timekeeperImage');
  
  if (time == partytime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTug9dmxc_DjNmn66v3zvfiCFKK9UmpVv8eBw&usqp=CAU";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-1zBz4AgcHPY_a78y-iic3Ha0tnWvjtMfQQiEeF43HuH9BS6LPpsKoxc-rfwJaeWi0k&usqp=CAU";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-1zBz4AgcHPY_a78y-iic3Ha0tnWvjtMfQQiEeF43HuH9BS6LPpsKoxc-rfwJaeWi0k&usqp=CAU";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://wallpapercave.com/wp/wp5742980.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kq0pMD4KCEbI7rBA7N-F5H8lvRgaTDxsFw&usqp=CAU";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-1zBz4AgcHPY_a78y-iic3Ha0tnWvjtMfQQiEeF43HuH9BS6LPpsKoxc-rfwJaeWi0k&usqp=CAU";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-1zBz4AgcHPY_a78y-iic3Ha0tnWvjtMfQQiEeF43HuH9BS6LPpsKoxc-rfwJaeWi0k&usqp=CAU";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  timekeeperImage.src = image;
  
  showCurrentTime();
};
updateClock();


var oneSecond = 1000;
setInterval( updateClock, oneSecond);


var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);



var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);