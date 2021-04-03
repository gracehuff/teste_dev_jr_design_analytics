let stylesDiv = {
    display: "flex",
    justifyContent: "center"
  };

$(".flexslider-wrapper").after($('<div>', {
    class: 'minhaDiv row',
}).css(stylesDiv));

let styles = {
    backgroundColor : "light-gray",
    fontWeight: "20px",
    height : "50px",
    width : "50%"
  };

$('<button>', {
    id: 'purpleButton',
}).on( "click", function() {
    $(".gray-light").css( "background-color", "purple" );
  }).css(styles).css("background-color", "purple").appendTo($(".minhaDiv"))

$('<button>', {
    id: 'greenButton',
}).on( "click", function() {
    $(".gray-light").css( "background-color", "green" );
  }).css(styles).css("background-color", "green").appendTo($(".minhaDiv"))

const allHeroDivs = document.querySelectorAll(".half-hero")
const allImagesCameraHero = allHeroDivs[12].querySelectorAll("img")
const allImagesNetworkHero = allHeroDivs[5].querySelectorAll("img")

for(let i=0; i<allImagesCameraHero.length; i++){
    allImagesNetworkHero[i].replaceWith(allImagesCameraHero[i])
}

let total = 0

const allPricesBatery = allHeroDivs[11].querySelectorAll(".half-hero-pricing")

allPricesBatery.forEach(prices => {
    let allValue = prices.innerHTML
    let price = allValue.trim().slice(12)
    total += Number.parseFloat(price) 
})

alert("Total value of the batteries section: $" + total.toFixed(2))
