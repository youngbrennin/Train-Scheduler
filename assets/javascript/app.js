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

//Capture Button Click
$("#add-user").on("click", function (event) {
    event.preventDefault();
    name = $("#name-input").val().trim();
        console.log(name);

    place = $("#place-input").val().trim();
        console.log(place);

    TrainTime = $("#TrainTime-input").val().trim(); 
    var frmt = moment(TrainTime, "hmm").format("HH:mm"); //=== "01:23"
        TrainTime = frmt;

    freq = $("#freq-input").val().trim();
        console.log(freq);

    minutesAway = $('#TrainTime-input').val().trim();
    var convertIt = moment(minutesAway).subtract(1, "years");
    var currentTime = moment();
    moment(currentTime).format("hh:mm")
    var diffTime = moment().diff(moment(convertIt), "minutes");//sends the information to firebase
    var tRemainder = diffTime % freq;
    var tMinutesTillTrain = freq - tRemainder;
    minutesAway = tMinutesTillTrain;
    console.log(minutesAway);
    database.ref().push({
        name: name,
        place: place,
        TrainTime: TrainTime,
        freq: freq,
        minutesAway: minutesAway
    });
 
});
//displays the value typed in into the current employees box
    database.ref().on("child_added", function (snapshot){
        $("#add-employee-row").append("<tr><td>" + snapshot.val().name +"</td><td>" + snapshot.val().place + "</td><td>" + snapshot.val().freq + "</td><td>" + snapshot.val().TrainTime + "</td><td>" + snapshot.val().minutesAway + "</td></tr>");
       
    });
        //need a seperate array for total billed
        // create calculation for months worked 
        //total billed need to multiply the var for monthly rate * months worked
