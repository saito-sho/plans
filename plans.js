// クエリパラメーター取得
const params = (new URL(document.location)).searchParams;

const company = params.get('company');
const flight = params.get('flight');
const destination = params.get('destination');
const time = params.get('time');
const changed_time = params.get('changed_time');
const notice = params.get('notice');

window.document.getElementById('company').innerText = company;
window.document.getElementById('flight').innerText = flight;
window.document.getElementById('destination').innerText = destination;
window.document.getElementById('time').innerText = time;
window.document.getElementById('changed_time').innerText = changed_time;
window.document.getElementById('notice').innerText = notice;

// 今日の日付
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();
window.document.getElementById('today').innerText = month + "-" + day;