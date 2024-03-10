$(function () {

  class GaugeChart {
    constructor(element, params) {
      this._element = element;
      this._initialValue = params.initialValue;
      this._higherValue = params.higherValue;
      this._title = params.title;
      this._subtitle = params.subtitle;
    }

    _buildConfig() {
      let element = this._element;

      return {
        value: this._initialValue,
        valueIndicator: {
          color: '#fff'
        },
        geometry: {
          startAngle: 180,
          endAngle: 360
        },
        scale: {
          startValue: 1,
          endValue: 100,
          customTicks: [0, 25, 50, 75, 100],
          tick: {
            length: 8
          },
          label: {
            font: {
              color: '#87959f',
              size: 9,
              family: '"Open Sans", sans-serif'
            }
          }
        },
        title: {
          verticalAlignment: 'bottom',
          text: this._title,
          font: {
            family: '"Open Sans", sans-serif',
            color: '#fff',
            size: 10
          },
          subtitle: {
            text: this._subtitle,
            font: {
              family: '"Open Sans", sans-serif',
              color: '#fff',
              weight: 700,
              size: 28
            }
          }
        },
        onInitialized: function () {
          let currentGauge = $(element);
          let circle = currentGauge.find('.dxg-spindle-hole').clone();
          let border = currentGauge.find('.dxg-spindle-border').clone();

          currentGauge.find('.dxg-title text').first().attr('y', 48);
          currentGauge.find('.dxg-title text').last().attr('y', 28);
          currentGauge.find('.dxg-value-indicator').append(border, circle);
        }
      };
    }

    init() {
      $(this._element).dxCircularGauge(this._buildConfig());
    }
  }

  $('.gauge').each(function (index, item) {
    let title;
    if (index === 0) {
      title = "Neural Net";
    } else if (index === 1) {
      title = "Combined";
    } else if (index === 2) {
      title = "Sentiment";
    }

    let params = {
      initialValue: 78, // Change the initial value here if needed
      higherValue: 90, // Change the higher value here if needed
      title: title,
      subtitle: '78 %'
    };

    let gauge = new GaugeChart(item, params);
    gauge.init();
  });

  /*$('#random').click(function () {
    $('.gauge').each(function (index, item) {
      let gauge = $(item).dxCircularGauge('instance');
      let randomNum = Math.round(Math.random() * 100);
      let gaugeElement = $(gauge._$element[0]);

      gaugeElement.find('.dxg-title text').last().html(`${randomNum} %`);
      gauge.value(randomNum);
    });
  });*/

  // Dropdown menu functionality

  $(".dropbtn").click(function () {
    $(this).next(".dropdown-content").toggleClass("show");
  });

  $(".currency-option").click(function () {
    const currency = $(this).data("currency");
    console.log(currency);
    const imagePath = imagePaths[currency];
    
    // Update the image source using vanilla JavaScript
    const currencyImage = document.getElementById("c-image");
    if (currencyImage) {
      currencyImage.src = imagePath;

      //random value to gauge charts
      // majd ide kellenek a predictek

      $('.gauge').each(function (index, item) {
        let gauge = $(item).dxCircularGauge('instance');
        let randomNum = Math.round(Math.random() * 100);
        let gaugeElement = $(gauge._$element[0]);
  
        gaugeElement.find('.dxg-title text').last().html(`${randomNum} %`);
        gauge.value(randomNum);
      });

    } else {
      console.error("Element with ID 'c-image' not found.");
    }
  
    $(this).closest(".dropdown-content").removeClass("show");
  });
  

  //felrekattintas
  $(document).click(function (e) {
    if (!$(e.target).closest(".dropdown").length) {
      $(".dropdown-content").removeClass("show");
    }
  });

});
