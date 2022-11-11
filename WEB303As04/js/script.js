/*
    Assignment #4
    {Your name here}
*/

$(function () {
    // your code here
    let lon1;
    let lat1;
    let lon2;
    let lat2;
    const location = document.getElementById("locationhere");
    try{
        navigator.geolocation.getCurrentPosition(success, fail);
    } catch{
        x.innerHTML = err;
    }
    function success(position){
        lat1 = position.coords.latitude;
        lon1 = position.coords.longitude;
        let sessionLocation = document.createElement("p");
        sessionLocation.innerHTML = "Longitude: " + lon1 + " Latitude: " + lat1;
        location.before(sessionLocation);
        if (!localStorage.getItem('lat2')){ 
            location.append("Welcome!");
            window.localStorage.setItem('lat2', JSON.stringify(lat1));
            window.localStorage.setItem('lon2', JSON.stringify(lon1));
        }
        if(localStorage.getItem('lat2')){
            lat2 = JSON.parse(window.localStorage.getItem('lat2'));
            lon2 = JSON.parse(window.localStorage.getItem('lon2'));
            let oldLocation = document.createElement("p");
            oldLocation.innerHTML = "Old Longitude: " + lon2 + " Old Latitude: " + lat2;
            location.append(oldLocation);
            let welcomeBack = document.createElement("h1");
            welcomeBack.innerHTML = "Welcome Back!";
            location.append(welcomeBack);
            let meterDistance = calcDistanceBetweenPoints(lat1, lon1, lat2, lon2);
            let kmDistance = meterDistance / 100;
            welcomeBack.after(kmDistance + "km");
        } 
        window.localStorage.setItem('lat2', JSON.stringify(lat1));
        window.localStorage.setItem('lon2', JSON.stringify(lon1));
    };
    function fail(){
        alert("You must enable Location Services to continue with this application");
    };
    
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


