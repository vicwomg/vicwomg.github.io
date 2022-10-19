var calendar;
var breakpoint = 1080;

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var isCalendarPage = window.location.pathname === "/calendar.html";
  calendar = new FullCalendar.Calendar(calendarEl, {
    googleCalendarApiKey: "AIzaSyCemW94vJWA0aeMsKFqwgF-4QErXim06ms",
    initialView: isCalendarPage ? "dayGridMonth" : "dayGridWeek",
    height: "auto",
    views: {
      dayGrid: {
        // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
        displayEventEnd: true,
        showNonCurrentDates: false,
        expandRows: true,
      },
    },
    eventClick: function (event) {
      // Prevent redirect to Google Calendar
      event.jsEvent.cancelBubble = true;
      event.jsEvent.preventDefault();
    },
    eventSources: [
      {
        googleCalendarId:
          "j4uge8u9i76qhb86gvced5p47s@group.calendar.google.com",
      },
    ],
  });

  calendar.render();

  if (window.innerWidth <= breakpoint) {
    calendar.changeView(isCalendarPage ? "listMonth" : "listWeek");
  }
});

$(function () {
  $("#header").load("navbar.html?v=13");
  $("#footer").load("footer.html?v=2");
});
