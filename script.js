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
        // event = eventObject;

        var textHour = event.target.parentElement.parentElement.children[1].firstElementChild.getAttribute("data-hour");
        var textValue = event.target.parentElement.parentElement.children[1].firstElementChild.value;

        if (textValue != null || undefined) {
            localStorage.setItem(textHour, textValue);
        };
    })

    // User input remains on calendar when browser is refreshed
    function showValue() {

        $(".inputBlock").each(function (index) {

            var textValue = localStorage.getItem($(this).attr("data-hour"));

            console.log(textValue);

            $(this).text(textValue);
        });

    } showValue();


});
