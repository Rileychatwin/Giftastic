$(document).ready(function () {
    var animeButton = [
        "Goku", "Edward Elric", "Itachi Uchiha", "Kakashi Hatake", "Ichigo Kurosaki",
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
        queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LkQOIjb9aDhFotnM2tpzgIsISGF8sHOT&q=" + title + "&limit=10&offset=0&rating=g&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var animeDiv = $("<div class='mx-auto'>");

                    var rating = $("<p>").text("Rated: " + results[i].rating.toUpperCase());

                    var animeIMG = $("<img>");
                    animeIMG.attr('src', results[i].images.fixed_height_still.url);
                    animeIMG.attr('data-still', results[i].images.fixed_height_still.url);
                    animeIMG.attr('data-animate', results[i].images.fixed_height.url);
                    animeIMG.attr('data-state', 'still');
                    animeIMG.addClass("gif");

                    $(animeDiv).append(animeIMG, rating);
                    $("#gif-button").prepend(animeDiv);

                }

            });

        $(document).on("click", ".gif", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
        function addButt(){
            $("<button/>",{
                text: $("#gif-imput").val(),
                class: "btn-class",
                id: $("#gif-imput").val(),
            });
        }
        // new button only adds if gifs are on the page
        $("#add-gif").on("click", function (event) {
            event.preventDefault();
            addButt()
            console.log(this.addButt);

        });
    });

    makeButton(animeButton);
});