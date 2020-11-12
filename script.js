$(document).ready(function () {

    var currentDay = $("#currentDay");
    var currentHour = moment().format("H");
    var agendaItem = $("<textarea>");
    var saveItem = $(".saveBtn");

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
    // Save text placed in text area to local storage

    // $(saveItem).click(function () {
    //     var store = $(this).val(agendaItem);
    //     if (localStorage.getItem())

    //         localStorage.setItem("", JSON.stringify(agendaItem))

    // }


});  