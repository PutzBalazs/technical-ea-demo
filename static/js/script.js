const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}

setGaugeValue(gaugeElement, 0.1);

document.addEventListener("DOMContentLoaded", function() {
  const dropdownLinks = document.querySelectorAll(".currency-option");
  const currencyImage = document.getElementById("currency-image");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const currency = this.getAttribute("data-currency");
      console.log("Selected currency:", currency, "d");

      if (imagePaths.hasOwnProperty(currency)) {
        currencyImage.src = imagePaths[currency];

        //ide majd nem ez kell hanem a megfelelő prdictek
        if (currency === "btc") setGaugeValue(gaugeElement, 0.4);
        if (currency === "eth") setGaugeValue(gaugeElement, 0.9);


      } else {
        console.error("Currency image path not found.");
      }
    });
  });
});
