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
var role = [];
var startDate = [];
var monthsWorked = [];
var rate = [];
var billed = [];
//Capture Button Click
$("#add-user").on("click", function (event) {
    event.preventDefault();
    name = $("#name-input").val().trim();
        console.log(name)
    role = $("#role-input").val().trim();
        console.log(role);
    startDate = $("#startDate-input").val().trim();
        console.log(startDate);
    rate = $("#rate-input").val().trim();
        console.log(rate);
//sends the information to firebase
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    });
 
});
//displays the value typed in into the current employees box
    database.ref().on("child_added", function (snapshot){
        $("#add-employee-row").append("<tr><td>" + snapshot.val().name +"</td><td>" + snapshot.val().role + "</td><td>" + snapshot.val().rate + "</td><td>" + snapshot.val().startDate + "</td></tr>");
       
    });
        //need a seperate array for total billed
        // create calculation for months worked 
        //total billed need to multiply the var for monthly rate * months worked
