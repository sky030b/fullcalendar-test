document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.querySelector("#calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: "zh-tw",
        fixedWeekCount: false,
        showNonCurrentDates: false,
        height: "auto",
        buttonText: { today: "今天" },
        events: [
            {
                title: "午餐便當",
                start: "2024-02-05",
                end: "2024-02-05"
            },
            {
                title: "晚餐便當",
                start: "2024-02-05",
                end: "2024-02-05",
                backgroundColor: "red"
            },
            {
                title: "event3",
                start: "2024-02-09T12:30:00",
                allDay: false // will make the time show
            },
            {
                title: "晚餐便當1255555555",
                start: "2024-02-22"
            }
            ,
            {
                title: "午餐便當2123",
                start: "2024-02-22"
            },
            {
                start: '2024-02-09',
                display: 'background'
            },
            {
                start: '2024-02-24',
                display: 'background',
                backgroundColor: "#462056"
            }
        ],
        eventClick: function (info) {
            alert("Event: " + info.event.title);
            info.el.style.borderColor = "red";
        },
        // eventContent: function (arg) {
        //   return {
        //     html: `<div class="custom-event">${arg.event.title}</div>`
        //   };
        // },
        eventMinHeight: 600
    });
    calendar.render();
});
