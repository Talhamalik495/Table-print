let htmlform = document.querySelector("#form");
let htmlinput = document.querySelector("#forminput");
let table = document.querySelector(".timetable");
htmlform.addEventListener("submit", (event) => {
    event.preventDefault();
    let formvalue = htmlinput.value;
    table.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
        //   console.log(tableOf + " x " + i + " =", tableOf * i);
        const message = `${formvalue} X ${i} = ${formvalue * i}`;
        table.innerHTML += `${message} <br>`;
    }
});