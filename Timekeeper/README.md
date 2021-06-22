# Recreated TIMEKEEPER which is basically based on basic HTML,CSS and JavaScript.
----
## What is this "TIMEKEEPER" about?
The [TIMEKEEPER](https://codepen.io/bintaparizat/pen/XWMwOWr) is designed to practice and explore basic HTML, CSS and JavaScript.

##Visual Representation of my project :

###Picture-1
![1](https://user-images.githubusercontent.com/43074604/122956930-44a92d80-d3a3-11eb-8891-2cd8ccb9568f.PNG)

###Picture-2
![2](https://user-images.githubusercontent.com/43074604/122957209-8639d880-d3a3-11eb-8b6d-510b1cde8dac.PNG)

##Real time Clock with JavaScript
```javascript
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

```


----
## Advantages of TIMEKEEPER
1. If you’re on a website or using web applications with a self-updating time feature (you know, a clock), there’s a very good chance it’s powered by JavaScript code. ⬇️
2. JavaScript TIMEKEEPER lets you get hands-on with the kind of actual work you’ll be doing as a JavaScript developer.💛



----
## Helpful resources
#### Images
* [TIMEKEEPER Images](https://www.google.com/search?q=anime+girl+study+pic&tbm=isch&ved=2ahUKEwjLqd7omazxAhXKYCsKHahZDJEQ2-cCegQIABAA&oq=anime+girl+study+pic&gs_lcp=CgNpbWcQAzIICAAQCBAHEB4yBggAEAgQHjoGCAAQBxAeOgUIABCxAzoICAAQsQMQgwE6AggAUJIaWOUyYIg1aABwAHgAgAGpAYgBsg-SAQQwLjE1mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=YVjSYIv1JcrBrQGos7GICQ&bih=657&biw=1366)

#### Fonts
* [Google Fonts](https://fonts.google.com/)

#### HTML
* [Beginners Guide to HTML](https://www.codecademy.com/learn/learn-html)


#### Texts and Headings
* [TIMEKEEPER texts](https://www.google.com/search?q=text+forsite&source=lmns&bih=657&biw=1366&hl=en&sa=X&ved=2ahUKEwi_irL9mazxAhXztksFHdywBGQQ_AUoAHoECAEQAA)

#### CSS
* [Beginners Guide to CSS](https://www.codecademy.com/learn/learn-css)


#### Learning More
* [Don't Fear the Internet](http://www.dontfeartheinternet.com/)





----
## Sharing Project Experience!
The project was such a wonderful experience. It was challenging, meaningful, and deeply fulfilling✨

