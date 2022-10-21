/*
    Assignment #4
    Programmed by Mitali Katudia
*/

$(function () {
    // your code here
let lati;
let longi;
let accur;
browser();

function browser(){
    let locationAccess = function(code, message) {
        $("div#locationhere").text("Please Allow Location to access the application.");
        alert("Please Allow the location to access the appliction"); 
    };
    navigator.geolocation.getCurrentPosition(userLocation, locationAccess);
}

function userLocation(position){
    lati = position.coords.latitude;
    longi = position.coords.longitude;
    accur = position.coords.accuracy;
    $("div#locationhere").text("Your Current Location:");
    $("div#locationhere").append("Latitude :" + lati + "," + "Longitude :" + longi + "<br><br>");
    $("div#locationhere").append("Accuracy: " + accur);
    Storage();
}

function Storage(){
    if(localStorage.getItem("Latitude:")){
        $("div#locationhere").append("<h1>" + "Latitude :"+localStorage.getItem("Latitude:") + " Longitude :"+ localStorage.getItem("Longitude:")+"</h1>");
        $("#divlocationhere").append("<h2>"+"Welcome back user"+"</h2>");                         
        let distance = calcDistanceBetweenPoints(localStorage.getItem("Latitude:"),localStorage.getItem("Longitude:"),lati,longi);
        $("div#locationhere").append("<p>"+"You have travelled: "+ distance +" meters."+"</p>");
    }
   else{
        $("div#locationhere").append("<h2>"+"Welcome new user"+"</h2>");
        window.localStorage.setItem('Latitude:',lati);
        window.localStorage.setItem('Longitude:',longi);
    }        
window.localStorage.setItem('Latitude:',lati);
window.localStorage.setItem('Longitude:',longi);
}
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


