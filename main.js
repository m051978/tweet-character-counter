
function count() {
    var tweet = document.getElementById("textArea").value.length;
    document.getElementById("tweetCharacters").innerHTML = tweet;
    var remaining = document.getElementById("tweetLeft").innerHTML = 280 - tweet;
}
