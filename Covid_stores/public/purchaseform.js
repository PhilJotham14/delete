// $(document).ready(function() { 
//     $('.amountdecimal').html(toFixed(2));
//  });
// function setTwoNumberDecimal(event) {
//     this.value = parseFloat(this.value).toFixed(2);
// }
$( "#amountnext" ).blur(function() {
    this.value = parseFloat(this.value).toFixed(2);
});