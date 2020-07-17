$(document).ready(function () {

    


    var animeButton = [
        "Goku", "Edward Elric", "Itachi Uchiha", "Kakashi Hatake", "Ichigo kurosaki",
    ];

    console.log(animeButton.length);

    function makeButton(theArray,btnClass) {
        for (var i = 0; i< theArray.length; i++){
            var deButt = $('<input/>').attr({ type: 'button', value: theArray[i],  }); 
            $("#button-area").append(deButt);
        };

    };

   

    

    makeButton(animeButton);
  

});