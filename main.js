
function count() {
    var tweet = document.getElementById("textArea").value.length;
    document.getElementById("tweetCharacters").innerHTML = tweet;
    var remaining = document.getElementById("tweetLeft").innerHTML = 280 - tweet;
    if(remaining < 10){
        document.getElementById('tweetLeft').style.color = "red";
    } else{
        document.getElementById('tweetLeft').style.color = "#000000a4";
    }
}
