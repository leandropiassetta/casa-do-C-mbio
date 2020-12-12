window.onload = () => { //Encapsulate everything within the onload function
  setupEventHandlers();
}

const setupEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
  const currency = document.querySelector('#currency-input').value // take the value of the input.
  const currencyUpperCase = currency.toUpperCase()

  cleanList();

  if(currency === '') {
    showAlert('A moeda deve ser informada');
  } else {
    fetchCurrency(currencyUpperCase);
  }
}

const showAlert = (message) => {
  window.alert(message);
}

const fetchCurrency = (currency) => {
  const endpoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

  fetch(endpoint)
    .then((Response) => Response.json())//Capture sucess
    .then((object) => {
      handleRates(object.rates);
    });
}

const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(renderRate);
  //Make the Layout of the Page
}

  const renderRate = ([ currency, value ]) => {
    const ul = document.querySelector('#currency-list');
    const li = document.createElement('li');
    li.innerHTML = `${currency}: ${value}`;
    ul.appendChild(li);
}

const cleanList = () => {
  const ul = document.querySelector('#currency-list');
  ul.innerHTML = '';
}