function sortWords(sentence) {
    sentence = document.getElementById("fparagraph").value;
    var text = "";
  
    if (!sentence) {
      alert("Please enter a sentence");
      return;
    }
  
    var words = sentence.split(" ");
    words.sort();
  
    var wordCount = words.length;
  
    for (var i = 0; i < words.length; i++) {
      text += words[i] + '<br>'
    }
  
    text = "Sorted words: <br>"                           
    text += words.join('<br>')
    text += "<br> There are" + " " + words.length + " " + "words.";         
    document.getElementById('textBox').innerHTML = text;
    console.log("Sorted words: " + words.join(", "));
    console.log("Number of words: " + wordCount);
  }
  
  var sentence = prompt("Please enter a sentence");
  sortWords(sentence);
  