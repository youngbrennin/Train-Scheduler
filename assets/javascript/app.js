  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDpnMWtuIUYMJRZZqCQrI2-UD3IuvM6Tw",
    authDomain: "train-scheduler-95653.firebaseapp.com",
    databaseURL: "https://train-scheduler-95653.firebaseio.com",
    projectId: "train-scheduler-95653",
    storageBucket: "train-scheduler-95653.appspot.com",
    messagingSenderId: "874759193481"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
// start of javascript coding
var name = [];
var place = [];
var TrainTime = [];
var monthsWorked = [];
var freq = [];
var billed = [];
//Capture Button Click
$("#add-user").on("click", function (event) {
    event.preventDefault();
    name = $("#name-input").val().trim();
        console.log(name)
    place = $("#place-input").val().trim();
        console.log(place);
    TrainTime = $("#TrainTime-input").val().trim();
        console.log(TrainTime);
    freq = $("#freq-input").val().trim();
        console.log(freq);
//sends the information to firebase
    database.ref().push({
        name: name,
        place: place,
        TrainTime: TrainTime,
        freq: freq
    });
 
});
//displays the value typed in into the current employees box
    database.ref().on("child_added", function (snapshot){
        $("#add-employee-row").append("<tr><td>" + snapshot.val().name +"</td><td>" + snapshot.val().place + "</td><td>" + snapshot.val().freq + "</td><td>" + snapshot.val().TrainTime + "</td></tr>");
       
    });
        //need a seperate array for total billed
        // create calculation for months worked 
        //total billed need to multiply the var for monthly rate * months worked
