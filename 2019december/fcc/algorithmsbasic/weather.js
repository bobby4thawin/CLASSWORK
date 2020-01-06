<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Weather In My City</h1>
    
    <p id="weather"></p>

    <button id="button">CLICK for the current weather in your city</button>

    <script>
    
    document.getElementById('button').addEventListener('click', getWeather);

    let endPoint = `https://api.openweathermap.org/data/2.5/weather?zip=02916,us&APPID=`; //CHANGE 02916 to your zipcode
          
    const myKey = ``; //ENTER YOUR KEY FROM YOUR SIGN UP EMAIL HERE

          endPoint += myKey;

        //this will log a url that when clicked on brings you to a new page with the current weather in Rumford RI (02916) 
        //data will be displayed as JSON code
          console.log(endPoint);
          
    function getWeather() {
        //constructor: create an instace of the Extended-Markup-Language-HyperText-Request

        const xhr = new XMLHttpRequest();

        //open

        xhr.open('GET', endPoint, true);

        //onload callback

        xhr.onload = () => {

        }

        //send SEEENNDDIT

        xhr.send();
        
    }
    
    </script>
</body>
</html>