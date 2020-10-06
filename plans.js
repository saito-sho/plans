// クエリパラメーター取得
const params = (new URL(document.location)).searchParams;

const company = params.get('company');
const flight = params.get('flight');
const destination = params.get('destination');
const time = params.get('time');
const changedTime = params.get('changedTime');
const notice = params.get('notice');

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
    } else if (time !== null && changedTime === null || changedTime === "") {
        window.document.getElementById('time').innerText = time;
    } else {
        window.document.getElementById('time').innerText = time;
        window.document.getElementById('change').innerText = '変更';
        window.document.getElementById('changedTime').innerText = '➡' + changedTime;
    }
}

function description() {
    if (company === null || flight === null || destination === null || time === null || company === "" || flight === "" || destination === "" || time === "") {
        window.document.getElementById('description').innerText = 'クエリパラメータから入力してください';
        window.document.getElementById('parameters').innerText = 'company=会社名　flight=便名　destination=行先　time=定刻　changedTime=定刻変更　notice=備考';
        window.document.getElementById("error").style.border = "5px solid red";
        window.document.getElementById("error").style.height = "90px";
    }
}

// 今日の日付
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
window.document.getElementById('today').innerText = month + "-" + day;