// クエリパラメーター取得
const params = (new URL(document.location)).searchParams;
const url = "https://saito-sho.github.io/plans/plans.html";

let company = params.get('company');
let flight = params.get('flight');
let destination = params.get('destination');
let time = params.get('time');
let changedTime = params.get('changedTime');
let notice = params.get('notice');

// クエリパラメータチェック
check('noneCompany', '会社名', 'company', company);
check('noneFlight', '便名', 'flight', flight);
check('noneDestination', '行先', 'destination', destination);
checkTime();
window.document.getElementById('notice').innerText = notice;
description();

function check(a, b, c, d) {
    if (d === null || d === "") {
        window.document.getElementById(a).innerText = `＊${b}を入力してください`;
    } else {
        window.document.getElementById(c).innerText = d;
    }
}

function checkTime() {
    if (time === null || time === "") {
        window.document.getElementById('noneTime').innerText = '＊定刻を入力してください';
    } else if (!(time.match(/^[0-9:]+$/))) {
        window.document.getElementById('noneTime').innerText = "＊時刻は半角数字で入力してください";
    } else if (time.length > 5) {
        window.document.getElementById('noneTime').innerText = "＊時刻は5文字以内で入力してください";
    } else if (time !== null && changedTime === null || changedTime === "") {
        window.document.getElementById('time').innerText = time;
    } else if (!(changedTime.match(/^[0-9:]+$/))) {
        window.document.getElementById('noneTime').innerText = "＊変更時刻は半角数字で入力してください";
        window.document.getElementById('time').innerText = time;
    } else if (changedTime.length > 5) {
        window.document.getElementById('noneTime').innerText = "＊変更時刻は5文字以内で入力してください";
        window.document.getElementById('time').innerText = time;
    } else {
        window.document.getElementById('time').innerText = time;
        window.document.getElementById('change').innerText = '変更';
        window.document.getElementById('changedTime').innerText = '➡' + changedTime;
    }
}

// エラー時の入力画面
function description() {
    if (company === null || flight === null || destination === null || time === null || company === "" || flight === "" || destination === "" || time === "" || !(time.match(/^[0-9:]+$/)) || !(changedTime.match(/^[0-9:]+$/))) {
        window.document.getElementById('description').innerText = '必須項目を入力してください';
        textCreate('textCompany', '会社名', '必須', company, 't-company');
        textCreate('textFlight', '便名', '必須', flight, 't-flight');
        textCreate('textDestination', '行先', '必須', destination, 't-destination');
        textCreate('textTime', '定刻', '必須', time, 't-time');
        textCreate('textChangedTime', '変更時間', "任意", changedTime, 't-changedTime');
        textCreate('textNotice', '備考', '任意', notice, 't-notice');
        btnCreate();
        window.document.getElementById("error").style.border = "5px solid red";
        window.document.getElementById("error").style.height = "160px";
    }
}
// テキストボックスの表示
function textCreate(a, b, c, d, id) {
    window.document.getElementById(a).innerText = b
    const text = window.document.getElementById(a);
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", id)
    input.setAttribute("maxlength", "5");
    input.setAttribute("placeholder", c);
    if (time || changedTime) {
        input.setAttribute("style", "”ime-mode:disabled;”")
    }
    text.appendChild(input);
    if (d !== null || d !== "") {
        window.document.getElementById(id).value = d

    }
}

// ボタンの表示
function btnCreate() {
    const text = window.document.getElementById('outputBtn');
    const input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "決定");
    input.setAttribute("onclick", "textInput()");
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

    const btn = window.document.getElementById('outputLink')
    const input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "発行します");
    input.setAttribute("onclick", "output()");
    btn.appendChild(input);

    console.log(url + '?' + params.toString());
}

function output() {
    document.location = url + '?' + params.toString();
}



// 今日の日付
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
window.document.getElementById('today').innerText = month + "-" + day;