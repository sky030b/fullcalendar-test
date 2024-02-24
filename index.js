document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.querySelector("#calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: "zh-tw",
        fixedWeekCount: false,
        showNonCurrentDates: false,
        height: "auto",
        buttonText: { today: "今天" },
        headerToolbar: {
            start: 'prevYear,nextYear', // will normally be on the left. if RTL, will be on the right
            center: 'prev,title,next',
            end: 'today' // will normally be on the right. if RTL, will be on the left
        },
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
            // {
            //     title: "event3",
            //     start: "2024-02-09T12:30:00",
            //     allDay: false // will make the time show
            // },
            {
                title: "晚餐便當1255555555",
                start: "2024-02-22"
            }
            ,
            {
                title: "午餐便當",
                start: "2024-02-22"
            },
            {
                start: '2024-02-09',
                display: 'background'
            },
            {
                start: '2024-02-24',
                display: 'background',
                backgroundColor: "#462056",
            },
            {
                start: '2024-02-23',
                display: 'background',
                backgroundColor: "#462056",
            },
            {
                title: "午餐",
                daysOfWeek: [3], // 指定事件在星期三發生
                // start: '2024-02-24', // 設定事件的開始時間
                // endTime: "17:00", // 設定事件的結束時間
                startRecur: "2024-02-24", // 開始日期（第一次事件發生的日期）
                // endRecur: "2024-12-31" // 結束日期（最後一次事件發生的日期）
            },
            {
                daysOfWeek: [3], // 指定事件在星期三發生
                // start: '8:00', // 設定事件的開始時間
                // endTime: "17:00", // 設定事件的結束時間
                startRecur: "2024-02-27", // 開始日期（第一次事件發生的日期）
                // endRecur: "2024-12-31" // 結束日期（最後一次事件發生的日期）
                display: 'background',
                backgroundColor: "orange",
            }
        ],
        eventClick: function (info) {
            // 檢查被點選的事件元素是否包含 lunch-event 類
            if (info.el.classList.contains("lunch-event")) {
                alert("午餐事件: " + info.event.title);
                info.el.style.borderColor = "red";
            }
        },
        eventClassNames: function (arg) {
            if (arg.event.title === "午餐便當") {
                return ['lunch-event',]
            } else if (arg.event.title === "晚餐便當") {
                return ['dinner-event']
            }
        },
        // eventContent: function (arg) {
        //     return {
        //         html: `<div class="custom-event p-3 text-center">${arg.event.title}</div>`,
        //     };
        // }
    });
    calendar.render();

    // 檢查當前視窗寬度，如果是電腦版則縮小為80%
    function resizeCalendar() {
        const calendarWrap = document.querySelector(".calendar-wrap");
        if (window.innerWidth >= 992) { // 電腦版使用80%寬度
            calendarWrap.classList.add("col-md-8");
        } else { // 手機版使用100%寬度
            calendarWrap.classList.remove("col-md-8");
        }
    }

    // 初始化時調整一次大小
    resizeCalendar();

    // 監聽視窗大小變化事件，以動態調整日曆大小
    window.addEventListener("resize", resizeCalendar);
});


