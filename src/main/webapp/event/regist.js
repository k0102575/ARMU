var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = $("#myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var progress = 0;

// When the user clicks the button, open the modal

btn.click(function() {
    modal.style.display = "block";
})

function display(per) {
  modal.style.display = "block";
  progress = per
  console.log(progress)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
} 

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
