document.addEventListener('DOMContentLoaded', function () {
    const depositBtn = document.getElementById('depositBtn');
    const currencySelect = document.getElementById('currency');
    const amountInput = document.getElementById('amount');
  
    // Your code for handling the deposit button click event
    depositBtn.addEventListener('click', function () {
      const currency = currencySelect.value;
      const amount = parseFloat(amountInput.value);
      // You can use this data to send it to your backend or handle it as needed
      console.log(`Currency: ${currency}, Amount: ${amount}`);
    });
  
    // Dummy data for the stock chart (BTC, LTC, ETH prices)
    const btcData = generateRandomData(30, 8000, 15000);
    const ltcData = generateRandomData(30, 120, 250);
    const ethData = generateRandomData(30, 200, 600);
  
    // Function to generate random price data
    function generateRandomData(count, min, max) {
      const data = [];
      for (let i = 0; i < count; i++) {
        const timestamp = new Date().getTime() - (count - i) * 86400000;
        const price = Math.random() * (max - min) + min;
        data.push([timestamp, price]);
      }
      return data;
    }
  
    // Function to update current price display
    function updatePriceDisplay(currency, price) {
      const priceDisplay = document.getElementById(`${currency}-price`);
      priceDisplay.textContent = price.toFixed(2); // Assuming prices are in 2 decimal places
    }
  
    // Dummy function to get current prices (for demonstration purposes)
    function getCurrentPrices() {
      const btcPrice = btcData[btcData.length - 1][1];
      const ltcPrice = ltcData[ltcData.length - 1][1];
      const ethPrice = ethData[ethData.length - 1][1];
      updatePriceDisplay('BTC', btcPrice);
      updatePriceDisplay('LTC', ltcPrice);
      updatePriceDisplay('ETH', ethPrice);
    }
  
    // Update current prices initially and every 5 seconds (for demonstration)
    getCurrentPrices();
    setInterval(getCurrentPrices, 5000);
  
    // Create the stock chart
    Highcharts.stockChart('chartContainer', {
      rangeSelector: {
        selected: 1
      },
      title: {
        text: 'Crypto Prices'
      },
      series: [{
        name: 'BTC',
        data: btcData,
        tooltip: {
          valueDecimals: 2
        }
      }, {
        name: 'LTC',
        data: ltcData,
        tooltip: {
          valueDecimals: 2
        }
      }, {
        name: 'ETH',
        data: ethData,
        tooltip: {
          valueDecimals: 2
        }
      }]
    });
  });
  