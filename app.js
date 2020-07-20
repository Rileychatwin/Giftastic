$(document).ready(function () {
    var animeButton = [
        "Goku", "Edward Elric", "Itachi Uchiha", "Kakashi Hatake", "Ichigo kurosaki",
    ];
    var deButt = "";
    var queryURL = "";
    var results = "";

    function makeButton(theArray,) {
        for (var i = 0; i < theArray.length; i++) {
            deButt = $("<button>");
            $("#button-area").append(deButt);
            deButt.addClass("btn-class");
            deButt.text(theArray[i]);
            deButt.data("dataType", theArray[i]);
        };
    };
    $(document).on("click", ".btn-class", function () {
        var title = $(this).data("dataType");
        console.log(title);
        queryURL =  "http://api.giphy.com/v1/gifs/search?q=" + title + "&/api_key=LkQOIjb9aDhFotnM2tpzgIsISGF8sHOT&limit=10";
    });

    makeButton(animeButton);
});