// const rateEl = document.getElementById("rate");
// const swapEl = document.getElementById("swap");
// const currencyOneEl = document.getElementById("currency-one");
// const currencyTwoEl = document.getElementById("currency-two");
// const amountOneEl = document.getElementById("amount-one");
// const amountTwoEl = document.getElementById("amount-two");

// // const getData = () => {
// //     const currencyOne = currencyOneEl.value;
// //     const currencyTwo = currencyTwoEl.value;

// //     fetch(`https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`)
// //     .then((res)=> res.json())
// //     .then((data)=>{
// //         console.log(data);
// //         const { conversion_rates } = data;
// //         const rates = conversion_rates[currencyTwo];
// //         amountTwoEl.value = (+amountOneEl.value + rates).toFixed(2);
// //     });

// // };

// // getData()

// // currencyOneEl.addEventListener("change", getData);
// // currencyTwoEl.addEventListener("change", getData);
// // amountOneEl.addEventListener("input", getData);


// let ratesFromBack = {};

// const getData = () => {
//     const currencyOne = currencyOneEl.value;
//     const currencyTwo = currencyTwoEl.value
//     fetch(`https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`)
//   .then((res)=> res.json())
//   .then((data)=>{
//     console.log(data);
//     const {conversion_rates} = data
//     ratesFromBack = {...conversion_rates};
//     calculateRates(currencyTwo, conversion_rates)
//   });
//   };

//   const calculateRates = (currencyTwo, data) => {
//     const rates = data[currencyTwo];
//     amountTwoEl.value = (+amountOneEl.value * rates).toFixed(2)
//   };

//   const runCalculateRates = () => {
//     calculateRates(currencyTwoEl.value, ratesFromBack);
//   };

//   const swapCurrencies = () => {
//     const temp = currencyOneEl.value;
//     currencyOneEl.value = currencyTwoEl.value;
//     currencyTwoEl.value = temp;
    
//     // Обновляем соответствующие значения курсов обмена
//     const tempRate = ratesFromBack[currencyOneEl.value];
//     ratesFromBack[currencyOneEl.value] = ratesFromBack[currencyTwoEl.value];
//     ratesFromBack[currencyTwoEl.value] = tempRate;
    
//     runCalculateRates();
//   };

//   getData();
//   console.log(ratesFromBack.EUR);

  
//   swapEl.addEventListener('click', swapCurrencies)
//   currencyOneEl.addEventListener('change',getData);
//   currencyTwoEl.addEventListener('change', runCalculateRates);
//   amountOneEl.addEventListener('input', runCalculateRates);






















  const rateEl = document.getElementById("rate");
  const swapEl = document.getElementById("swap");
  const currencyOneEl = document.getElementById("currency-one");
  const currencyTwoEl = document.getElementById("currency-two");
  const amountOneEl = document.getElementById("amount-one");
  const amountTwoEl = document.getElementById("amount-two");
  
  let ratesFromBack = {};
  
  const getData = () => {
    const currencyOne = currencyOneEl.value;
    const currencyTwo = currencyTwoEl.value;
    fetch(
      `https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`
    )
      .then((res) => res.json())
      .then((data) => {
        const { conversion_rates } = data;
        ratesFromBack = { ...conversion_rates };
        calculateRates(currencyTwo, conversion_rates);
      });
  };
  
  const calculateRates = (currencyTwo, data) => {
    const rates = data[currencyTwo];
    amountTwoEl.value = (+amountOneEl.value * rates).toFixed(2);
    rateEl.innerText = `1 ${currencyOneEl.value} = ${rates} ${currencyTwoEl.value}`;
  };
  
  const runCalculateRates = () => {
    calculateRates(currencyTwoEl.value, ratesFromBack);
  };
  
  // const swapCurrencies = () => {
  //   const temp = currencyOneEl.value;
  //   currencyOneEl.value = currencyTwoEl.value;
  //   currencyTwoEl.value = temp;
  
  //   // Обновляем соответствующие значения курсов обмена
  //   const tempRate = ratesFromBack[currencyOneEl.value];
  //   ratesFromBack[currencyOneEl.value] = ratesFromBack[currencyTwoEl.value];
  //   ratesFromBack[currencyTwoEl.value] = tempRate;
    
  //   getData()
  //   runCalculateRates();
  // };


  const swapCurrencies = () => {
    const tempCurrency = currencyOneEl.value;
    currencyOneEl.value = currencyTwoEl.value;
    currencyTwoEl.value = tempCurrency;
  
    const tempAmount = amountOneEl.value;
    amountOneEl.value = amountTwoEl.value;
    amountTwoEl.value = tempAmount;
  
    const tempRate = ratesFromBack[currencyOneEl.value];
    ratesFromBack[currencyOneEl.value] = ratesFromBack[currencyTwoEl.value];
    ratesFromBack[currencyTwoEl.value] = tempRate;
  
    runCalculateRates();
  };
 
  getData();
  
  swapEl.addEventListener("click", swapCurrencies);
  currencyOneEl.addEventListener("change", getData);
  currencyTwoEl.addEventListener("change", runCalculateRates);
  amountOneEl.addEventListener("input", runCalculateRates);
  

