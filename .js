const url = new encodeURL(document.location);
console.log(url);
const params=url.searchParams;
console.log(params)
const company=params.get('company');
console.log(params)
window.document.getElementById('company').innerText = company;
console.log(params)