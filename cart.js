const table = document.getElementById("tbl");
const historyData = JSON.parse(window.localStorage.getItem("Order History"));

let body = table.innerHTML;
for(let i = 0; i < historyData.length; i++){
    body = body + `<tbody><td><img src=${historyData[i][0]} alt=""></td><td>${historyData[i][1]}</td><td>${historyData[i][2]} 1</td><td>${historyData[i][3]}</td><td>${historyData[i][4]}</td><td>${historyData[i][5]}</td></tbody>`
}
table.innerHTML = body;