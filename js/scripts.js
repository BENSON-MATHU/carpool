//user interface
$(document).ready(function(){
  //get-ride div
    $("#search-ride-passenger").click(function(){
        $("#form-give-ride").toggle();
        $("#offer-ride-page").fadeOut();
        $("#search-drive-page").fadeOut();
    });

    $("#request-ride").click(function(){
        $("#form-get-ride").toggle();
        $("#search-drive-page").fadeOut();
        $("#offer-ride-page").fadeOut();
    });

    $("#return-driver").click(function(){
        $("#offer-ride-page").toggle();
        $("#search-drive-page").toggle();
        $("#form-give-ride").fadeOut();
    });

    $("#give-details-driver").click(function(){

        driverName = $("#driver-name").val();
        driverId = $("#driver-id").val();
        driverPhone = $("#driver-phone").val();
        driverStart = $("#driver-start-point").val();
        driverEnd = $("#driver-end-point").val();

    });

    $("#give-details-driver").click(function(){
          $("#nameD").text(driverName);
          $("#idD").text(driverId);
          $("#phoneD").text(driverPhone);
          $("#startD").text(driverStart);
          $("#endD").text(driverEnd);
          $("#form-give-ride").fadeOut();
          $("#search-drive-page , #offer-ride-page ,#search-ride-passenger").toggle()
    });


    $("#return-give-passenger").click(function(){
        $("#search-drive-page").toggle();
        $("#offer-ride-page").toggle();
        $("#form-get-ride").fadeOut();
    });

    $("#give-details-passenger").click(function(){
        passengerName = $("#passenger-name").val();
        passengerId = $("#passenger-id").val();
        passengerphone = $("#passenger-phone").val();
        passengerStart = $("#passenger-start-point").val();
        passengerEnd = $("#passenger-end-point").val();
      });

    $("#give-details-passenger").click(function(){
      $("#nameP").text(passengerName);
      $("#idP").text(passengerId);
      $("#phoneP").text(passengerphone);
      $("#startP").text(passengerStart);
      $("#endP").text(passengerEnd);
      $(" #form-get-ride").fadeOut();
      $("#search-driver-page").show();
       $("#give-details-passenger").hide();
       $("#offer-ride-page").show();


    });


  $("#Checks").click(function(){
      if(passengerEnd === driverEnd && passengerStart ===  driverStart){
        alert("uHV A MATCH");
      }
      else{
        alert("no match");
      }

  });

   $("#Checks").click(function(){
     $(".show-results").toggle();
   });

});
//global variables
var driverName;
var driverId;
var driverPhone;
var driverStart;
var driverEnd;


var passengerName;
var passengerId;
var passengerphone;
var passengerStart;
var passengerEnd;


//business logic
