const host = "https://microzeny.github.io/microzeny-button";
//const host = "http://localhost:4000";
const baseUrl = "https://microzeny.com/tip"

function getElements() {
  return document.querySelectorAll('a.microzeny-button');
}

function loadCss() {
  var style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', host + '/dest/style.css');
  style.setAttribute('type', 'text/css');
  document.body.appendChild(style);
}

function makeAsLink(element) {
  if(!element.getAttribute('data-microzeny-id')){ return; }

  const toAccount = element.getAttribute('data-microzeny-id');
  const number = element.getAttribute('data-number');
  const unit = element.getAttribute('data-unit');
  const description = element.getAttribute('data-description');

  var url = baseUrl + '?to_account=' + toAccount;
  if (number !== null && unit !== null) {
    url += '&number=' + number + '&unit=' + unit;
  }
  if (description !== null) {
    url += '&description=' + description;
  }
  element.setAttribute('href', url);
}

function main() {
  loadCss();
  var elements = getElements();

  for(var i=0; i<elements.length; i++){
    makeAsLink(elements[i]);
  }
};


main();
