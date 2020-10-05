const params = new URL(document.location).searchParams;
console.log(params)
const company=params.get('company');
console.log(params)
window.document.getElementById('company').innerText = company;
console.log(params)