window.onload = () => { //Encapsulate everything within the onload function
  setupEventHandlers();
}

const setupEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
  const currency = document.querySelector('#currency-input').value // take the value of the input.
  if(currency === '') {
    showAlert('A moeda deve ser informada');
  } else {
    fetchCurrency(currency);
  }
}

const showAlert = (message) => {
  window.alert(message);
}

const fetchCurrency = (currency) => {
  const endpoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

  fetch(endpoint)
    .then((Response) => Response.json())
    .then((object) => {
      handleRates(object.rates);
    });
}

const handleRates = (rates) => {
  console.log(rates)
}