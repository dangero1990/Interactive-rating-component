let value = ""

const clickedRating = function() {
  document.getElementById(this.id).style.backgroundColor = "var(--Medium-Grey)";
  document.getElementById(this.id).style.color = "var(--White)";

  value = document.getElementById(this.id).innerHTML;

  document.getElementById("score").innerHTML = "You selected " + value + " out of 5";
}


document.getElementById("rating-1").onclick = clickedRating;
document.getElementById("rating-2").onclick = clickedRating;
document.getElementById("rating-3").onclick = clickedRating;
document.getElementById("rating-4").onclick = clickedRating;
document.getElementById("rating-5").onclick = clickedRating;

document.getElementById("button").onclick = function() {
    document.getElementById("ty-mess").style.display = "flex";
    document.getElementById("questionaire").style.display = "none";
  }


