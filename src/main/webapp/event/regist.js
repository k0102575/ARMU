var modal = document.getElementById('myModal');

var btn = $("#myBtn");

var span = document.getElementsByClassName("closeBtn")[0];

btn.click(function() {
    modal.style.display = "block";
})

function display() {
  modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
} 

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

display()
