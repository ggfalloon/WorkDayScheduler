$(document).ready(function () {

    var currentDay = $("#currentDay");
    var currentHour = moment().format("H");

    // Display current Day
    currentDay.text(moment().format('dddd, LL'));


    // Function to determine current hour and corresponding background color
    $(".inputBlock").each(thisHour);

    function thisHour() {
        var calHour = ($(this).attr("data-hour"));
        calHour = parseInt(calHour);

        if (calHour == currentHour) {
            $(this).addClass("present");
        } else if (calHour < currentHour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }
    }

    // //  Save user input text to local storage when save button is clicked

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        var agendaItem = $("#userInput").val();

        for (var i = 0; i < agendaItem.length; i++) {

            if (agendaItem != null) {
                localStorage.setItem("info", agendaItem);
            };
        }

        console.log(agendaItem);

        // User input remains when browser is refreshed
        // function storeValue() {
        //     var agendaText = localStorage.getItem("info");
        //     $(agendaText).te(agendaItem);
        // }
        // storeValue();
    })

});
