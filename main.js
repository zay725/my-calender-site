const daysTag = document.getElementById("days");
const monthYear = document.getElementById("monthYear");

let date =new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

Function renderCalender() {

    let FirstDay = new Date(currentYear, currentMonth, 1).getDay();
    let lastdate = new Date(currentYear, currentMonth + 1, 0).getDate();


let li ="";

for (let i = 0; i< FirstDay; i++) {
    li += "<li></li>";
}

for(let i = 1; i <= lastDate; i++){
    li += <li>${i}</li>;
}

daysTag.innerHTML = li;

monthYear.innerText =
    date.toLocaleString('default') { month:
    +"" + currentYear;
    }
    rendercalender();
    document.getElementById("prev").onclick = () =>
        currentMonth--;
        date = new Date (currentYear, currentMonth);
        currentYear = date.getFullYear, currentMoth();
        currentMonth = date.getMonth() ;
        renderCalender();
};


