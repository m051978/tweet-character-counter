
const MAX_LENGHT = 280;

function count() {
    const tweetElement = document.getElementById("textArea");
    tweetElement.value = tweetElement.value.slice(0, MAX_LENGHT);
    const tweetLength = tweetElement.value.length;  

    document.getElementById("tweetCharacters").innerHTML = tweetLength;

    const charactersLeftElement = document.getElementById("tweetLeft");
    const remaining = MAX_LENGHT - tweetLength;

    charactersLeftElement.innerHTML = remaining;

    if(remaining < 10){
        document.getElementById('tweetLeft').style.color = "red";
    } else{
        document.getElementById('tweetLeft').style.color = "#000000a4";
    }
}


