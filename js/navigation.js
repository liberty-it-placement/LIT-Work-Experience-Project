
// This is preparation done on the page startup to setup the initial page start
  $().ready(function(){

    hideErrorAlerts();

    $("#personalLink a").click(function(){
      showPersonalDetails(); 
      return false;
    });

    $("#carLink a").click(function(){
      showCarDetailsnav(); 
      return false;
    });

    $("#quoteLink a").click(function(){
      showQuoteDetailsnav(); 
      return false;
    });
  });
      function showCarDetailsnav() {
       $("#dvCarDetails").show()
       $("#dvPersonalDetails").hide()
       $("#dvQuoteDetails").hide()
       }


 function showCarDetails() {
  if ($("#txtName").val()!="" && $("#txtAge").val()!=""  && $("#txtTownCity").val()!="" && $("#txtemail").val()!="" && $("txtYNCB").val()!="" &&
  ( $("#txtmaleradio").val()!="" || $("#txtfemaleradio").val()!="" || $("#txtotherradio").val()!=""))
  {
     
       $("#dvCarDetails").show()
       $("#dvPersonalDetails").hide()
       $("#dvQuoteDetails").hide()
     } else {
         $("#dvPersonalDetailsAlert").show()
       }
    // Hide the personal details section (dvPersonalDetails)
    // Hide the quote section (dvQuoteDetails)
    // Show the car details section (dvCarDetails)
}

  function showPersonalDetails() {
     $("#dvCarDetails").hide()
     $("#dvPersonalDetails").show()
     $("#dvQuoteDetails").hide()
      // Hide the car details section (dvCarDetails)
      // Hide the quote section (dvQuoteDetails)
      // Show the personal details section (dvPersonalDetails)
  }
 function showQuoteDetailsnav() {
    $("#dvCarDetails").hide()
     $("#dvPersonalDetails").hide()
     $("#dvQuoteDetails").show()
}

  function showQuoteDetails() {
     if ($("#txtManufacturer").val()!="" && $("#txtModel").val()!=""  && $("#txtCarAge").val()!="" && $("#txtEngineSize").val()!="" && $("#txtStorage").val()!="" && $("#CarValueInput").val()!="")
  {   
     $("#dvCarDetails").hide()
     $("#dvPersonalDetails").hide()
     $("#dvQuoteDetails").show()

     } else {
         $("#dvCarDetailsAlert").show()
       }

      // Hide the car details section (dvCarDetails)
      // Hide the personal details section (dvQuoteDetails)
      // Show the quote section (dvPersonalDetails)
  }

  function getQuote() {

    // Perform validation to test that all data has been entered

    if (true)
    {

      // Get the values from the page elements that you need to create your JSON
console.log("before request")
      $.ajax({
          type: "GET",
          url: "http://172.26.9.254:8080/api/calculateRates",
          data: { gender         : $("#genderInput").val(),
                  age            : $("#txtAge").val(),
                  noClaimsBonus  : $("#txtYNCB").val(),
                  cost           : $("#txtCarValue").val(),
                  carStorage     : $("#txtStorage").val()}
        }).done(function(data) {
          $("#txtQuote").text(data.result.toFixed(2));
          console.log("after request1")
          showQuoteDetails()
          console.log("after request2")
          // Put the return value into Label created on quote details
          // Hide the Car Details section
          // Display the quote details page
      });
  }
  else { $("#dvCarDetailsAlert").show();
    
  }
}
//function (response){
//  response.data.message
 // response.data.date
//} 
//################################# Helper Functions - look at these when validating and changing section #########################################

  // Use this function to "Reset" the form and hide all 3 error sections whenever you make a section transition
  function hideErrorAlerts()
  {
    $("#dvPersonalDetailsAlert").hide();
    $("#dvCarDetailsAlert").hide();
    $("#dvQuoteDetailsAlert").hide();
  }

  // This function will control the top navigation and set the active tab when you make a section transition
  // You will need to call it and pass in the tab that needs to be made active
  function setActiveNavigation(activeTab) {
    $(".nav li").removeClass("active");

    $("#" + activeTab).addClass("active");
  }
