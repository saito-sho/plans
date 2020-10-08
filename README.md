https://saito-sho.github.io/plans/plans.html?company=ジョブキタ&flight=JK300&destination=エンジニア&time=15:00&changedTime=15:30&notice=さらなる準備のため


 <input type="submit" value="発行" id="output" onclick="textInput()">

window.document.getElementById('text3').innerText="データが発行されました。発行ボタンからアクセスしてください。"
const btn = window.document.getElementById('outputLink')
    const input = document.createElement("input");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "発行します");
    input.setAttribute("onclick", "output()");
    btn.appendChild(input);
    window.document.getElementById("error").style.height = "250px";

    function output() {
    document.location = url + '?' + params.toString();

    checkQuery();
}

 !(changedTime === null) ||