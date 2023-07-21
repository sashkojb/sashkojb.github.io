let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let bnt1 = document.getElementById("btn1");

bnt1.addEventListenner("click", function(){
    tg.MainButton.setText("Работает!");
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

