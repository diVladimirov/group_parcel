export function getRefs() {
    return {
        body: document.querySelector('body'),
        tempetatureDegree: document.querySelector('.temperature-degree'),
        timeZone: document.querySelector('.location-timezone'),
        decs: document.querySelector('.temperature-description'),
        icon: document.querySelector('.icon'),
        skycons: document.querySelector("#icon1"),
        dataDate: document.querySelector('.date__day'),
        dataMonthTime: document.querySelector('.date__month-time'),
        dataMonth: document.querySelector('.date__month'),
        dataTime: document.querySelector('.date__time'),
    }
}