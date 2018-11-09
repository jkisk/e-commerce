document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {indicators: false, interval: 4500, duration: 650});

});

document.querySelector( '#email' ).addEventListener('submit', function(event){
  event.preventDefault()
  document.querySelector('#email').reset()
  alert("Welcome to the Propaniacs")
})