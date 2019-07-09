var card = document.getElementById("card");
var jsonOutput = document.getElementById("json-response");
var deckId = "";

function initialiseDeck(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            jsonOutput.innerHTML = JSON.stringify(JSON.parse(this.responseText), undefined, 2);
            var obj = JSON.parse(this.responseText);
            deckId = obj.deck_id;
        }
    }
    xhttp.open("GET", "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", true)
    xhttp.send();
}

function getCard(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            jsonOutput.innerHTML = JSON.stringify(JSON.parse(this.responseText), undefined, 2);
            var obj = JSON.parse(this.responseText);
            card.setAttribute("src", obj.cards[0].image);
        }
    }
    xhttp.open("GET", "https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1", true)
    xhttp.send();
}