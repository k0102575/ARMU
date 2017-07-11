var cat1 = document.getElementById("category1");
var cat2 = document.getElementById("category2");
var cat3 = document.getElementById("category3");
var major = document.getElementById("major-category")
var theme = document.getElementById("theme-category")
var genre = document.getElementById("genre-category")
cat2.addEventListener('click', function() {
  theme.setAttribute('hidden', '')
  genre.setAttribute('hidden', '')
  major.removeAttribute('hidden')
  $('#category1').css('font-weight','normal')
  $('#category1').css('font-size','250%')
  $('#category3').css('font-weight','normal')
  $('#category3').css('font-size','250%')
  $('#category2').css('font-weight','900')
  $('#category2').css('font-size','270%')
});
cat3.addEventListener('click', function() {
  theme.setAttribute('hidden', '')
  major.setAttribute('hidden', '')
  genre.removeAttribute('hidden')
  $('#category2').css('font-weight','normal')
  $('#category2').css('font-size','250%')
  $('#category1').css('font-weight','normal')
  $('#category1').css('font-size','250%')
  $('#category3').css('font-weight','900')
  $('#category3').css('font-size','270%')
});
cat1.addEventListener('click', function() {
  theme.setAttribute('hidden', '')
  genre.setAttribute('hidden', '')
  theme.removeAttribute('hidden')
  $('#category2').css('font-weight','normal')
  $('#category2').css('font-size','250%')
  $('#category3').css('font-weight','normal')
  $('#category3').css('font-size','250%')
  $('#category1').css('font-weight','900')
  $('#category1').css('font-size','270%')
});
