const params = (new URL(document.location)).searchParams;

const company=params.get('company');
window.document.getElementById('company').innerText = company;