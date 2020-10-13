// クエリパラメーター取得
const params = (new URL(document.location)).searchParams;
const url = "https://saito-sho.github.io/plans/plans.html";

let company = params.get('company');
let flight = params.get('flight');
let destination = params.get('destination');
let time = params.get('time');
let changedTime = params.get('changedTime');
let notice = params.get('notice');
let color = params.get('color');

// クエリパラメータチェック
start();
description();


function start() {
    if (url !== location.href) {
        check('noneCompany', '会社名', 'company', company, 12);
        check('noneFlight', '便名', 'flight', flight, 12);
        check('noneDestination', '行先', 'destination', destination, 12);
        checkTime();
        checkNotice();
        checkColor1()
    }
}

function check(a, b, c, d, word) {
    if (d === null || d === "") {
        window.document.getElementById(a).innerText = `＊${b}を入力してください`;
    } else if (d.length > word) {
        window.document.getElementById(a).innerText = `＊${b}を${word}文字以内で入力してください`;
    } else {
        window.document.getElementById(c).innerText = d;
    }
}

function checkTime() {
    if (changedTime === null) {
        changedTime = ""
    }
    if (time === null || time === "") {
        window.document.getElementById('noneTime').innerText = '＊定刻を入力してください';
    } else if (!(time.match(/^[0-9:]+$/))) {
        window.document.getElementById('noneTime').innerText = "＊時刻は半角数字で入力してください";
    } else if (time.length > 5 || time.length < 4) {
        window.document.getElementById('noneTime').innerText = "＊時刻を正しく入力してください";
    } else if (time !== null && changedTime === null || changedTime === "") {
        window.document.getElementById('time').innerText = time;
    } else if (!(changedTime.match(/^[0-9:]*$/))) {
        window.document.getElementById('noneTime').innerText = "＊変更時刻は半角数字で入力してください";
        window.document.getElementById('time').innerText = time;
    } else if (changedTime.length > 5 || changedTime.length < 4) {
        window.document.getElementById('noneTime').innerText = "＊変更時刻を正しく入力してください";
        window.document.getElementById('time').innerText = time;
    } else {
        window.document.getElementById('time').innerText = time;
        window.document.getElementById('change').innerText = '変更';
        window.document.getElementById('changedTime').innerText = '➡' + changedTime;
    }
}

function checkNotice() {
    if (notice === "" || notice === null) {
        notice = "無し";
    }
    if (notice.length > 30) {
        window.document.getElementById().innerText = '＊行先は30文字以内で入力してください';
    } else {
        window.document.getElementById('notice').innerText = notice;
    }
}

function checkColor1() {
    switch (color) {
        case "grenn":
            changeCss("style-min.css");
            break;
        case "navy":
            changeCss("style-navy.css");
            break;
        case "monochrome":
            changeCss("style-monochrome.css");
            break;
        case "khaki":
            changeCss("style-khaki.css");
            break;
        case "maroon":
            changeCss("style-maroon.css");
            break;
    }
}

function checkColor2() {
    switch (color) {
        case "grenn":
            document.getElementById("green").setAttribute("selected", "");
            changeCss("style-min.css");
            break;
        case "navy":
            document.getElementById("navy").setAttribute("selected", "");
            changeCss("style-navy.css");
            break;
        case "monochrome":
            document.getElementById("monochrome").setAttribute("selected", "");
            changeCss("style-monochrome.css");
            break;
        case "khaki":
            document.getElementById("khaki").setAttribute("selected", "");
            changeCss("style-khaki.css");
            break;
        case "maroon":
            document.getElementById("maroon").setAttribute("selected", "");
            changeCss("style-maroon.css");
            break;
    }
}


// エラー時の入力画面
function description() {
    if (company === null || flight === null || destination === null || time === null || company === "" || flight === "" || destination === "" || time === "" || !(time.match(/^[0-9:]+$/)) || !(changedTime.match(/^[0-9:]*$/)) ||
        company.length > 12 || flight.length > 12 || destination.length > 12 || time.length > 5 || time.length < 4 || changedTime.length > 5 || changedTime.length < 4 && changedTime.length >= 1 || notice.length > 30) {
        window.document.getElementById('description').innerText = '必須項目を入力してください';
        textCreate('textCompany', '会社名', '必須,12文字以内', company, 't-company', 12);
        textCreate('textFlight', '便名', '必須,12文字以内', flight, 't-flight', 12);
        textCreate('textDestination', '行先', '必須,12文字以内', destination, 't-destination', 12);
        textCreate('textTime', '定刻', '必須,例：12:00', time, 't-time', 5);
        textCreate('textChangedTime', '変更時間', '任意,例12:30', changedTime, 't-changedTime', 5);
        textCreate('textNotice', '備考', '任意,30文字以内', notice, 't-notice', 30);
        pullCreate();
        changePull();
        btnCreate("o-btn", "outputBtn", "決定", "textInput()");
        window.document.getElementById("error").style.border = "5px solid white";
        window.document.getElementById("error").style.height = "160px";
    } else {
        btnCreate("p-btn", "parametersBtn", "データ更新", "update()");
        window.document.getElementById("header-text").style.paddingLeft = "100px"
    }
}
// テキストボックスの表示
function textCreate(a, b, c, d, id, word) {
    window.document.getElementById(a).innerText = b
    const text = window.document.getElementById(a);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", id)
    input.setAttribute("maxlength", word);
    input.setAttribute("placeholder", c);
    if (time || changedTime) {
        input.setAttribute("style", "”ime-mode:disabled;”")
    }
    text.appendChild(input);
    if (d !== null || d !== "") {
        window.document.getElementById(id).value = d

    }
}

// 色を変えるプルダウン作成
function pullCreate() {
    window.document.getElementById("pullDown").innerText = "カラー変更";
    const pullFore = window.document.getElementById("pullDown");
    const form = document.createElement("form");
    form.setAttribute("name", "pullForm");
    form.setAttribute("id", "pullForm");
    pullFore.appendChild(form);
    const pull = window.document.getElementById("pullForm");
    const select = document.createElement("select");
    select.setAttribute("name", "changeColor");
    select.setAttribute("id", "changeColor");
    select.setAttribute("onChange", "changePull()");
    pull.appendChild(select);
    inPull("noneColor", "色を選んでください");
    inPull("green", "グリーン");
    inPull("navy", "ネイビー");
    inPull("monochrome", "モノクロ");
    inPull("khaki", "カーキ");
    inPull("maroon", "マルーン");
}
// プルダウンの項目
function inPull(valueColor, color) {
    const changeColor = window.document.getElementById("changeColor");
    const option = document.createElement("option");
    option.setAttribute("value", valueColor);
    option.setAttribute("id", valueColor);
    changeColor.appendChild(option);
    window.document.getElementById(valueColor).innerText = color;
}

// プルダウン選択時の色
function changePull() {
    const select = document.pullForm.changeColor;
    const index = select.selectedIndex;
    checkColor2();
    document.getElementById("noneColor").setAttribute("disabled", "");
    switch (select.options[index].id) {
        case "green":
            changeCss("style-min.css");
            return color = "green";
        case "navy":
            changeCss("style-navy.css");
            return color = "navy";
        case "monochrome":
            changeCss("style-monochrome.css");
            return color = "monochrome";
        case "khaki":
            changeCss("style-khaki.css");
            return color = "khaki";
        case "maroon":
            changeCss("style-maroon.css");
            return color = "maroon";
    }
}

// カラー変更時にcss変更
function changeCss(css) {
    const d = document;
    const link = d.createElement('link');
    link.href = css;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    const h = d.getElementsByTagName('head')[0];
    h.appendChild(link);
}

// 発行ボタンとパラメター生成ボタンの表示
function btnCreate(divBtn, btnId, value, onclick) {
    const text = window.document.getElementById(divBtn);
    const input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("id", btnId)
    input.setAttribute("value", value);
    input.setAttribute("onclick", onclick);
    text.appendChild(input);
}

// 発行ボタン
function textInput() {
    company = window.document.getElementById('t-company').value;
    flight = window.document.getElementById('t-flight').value;
    destination = window.document.getElementById('t-destination').value;
    time = window.document.getElementById('t-time').value;
    changedTime = window.document.getElementById('t-changedTime').value;
    notice = window.document.getElementById('t-notice').value;
    params.set('company', company);
    params.set('flight', flight);
    params.set('destination', destination);
    params.set('time', time);
    params.set('changedTime', changedTime);
    params.set('notice', notice);
    params.set('color', color);

    document.location = url + '?' + params.toString();
}
// パラメータの更新
function update() {
    window.document.getElementById('description').innerText = '更新箇所を入力してください';
    textCreate('textCompany', '会社名', '必須,12文字以内', company, 't-company', 12);
    textCreate('textFlight', '便名', '必須,12文字以内', flight, 't-flight', 12);
    textCreate('textDestination', '行先', '必須,12文字以内', destination, 't-destination', 12);
    textCreate('textTime', '定刻', '必須,例:12:00', time, 't-time', 5);
    textCreate('textChangedTime', '変更時間', '任意,例:12:30', changedTime, 't-changedTime', 5);
    textCreate('textNotice', '備考', '任意,30文字以内', notice, 't-notice', 30);
    btnCreate("o-btn", "outputBtn", "決定", "textInput()");
    pullCreate();
    changePull();
    window.document.getElementById("error").style.border = "5px solid white ";
    window.document.getElementById("error").style.height = "160px";
    window.document.getElementById("header-text").style.paddingLeft = "0px"

}

// 今日の日付
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
window.document.getElementById('today').innerText = month + "-" + day;