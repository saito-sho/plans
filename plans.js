const params = (new URL(document.location)).searchParams;

const company = params.get('company');
const flight = params.get('flight');
console.log(company);
console.log(flight);
window.document.getElementById('company').innerText = company;
window.document.getElementById('flight').innerText = flight;