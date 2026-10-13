
function alertFunction() {
    alert("Hello, world!");
    document.getElementById("textsize").style.fontSize = "24pt";
}

function fancifyText(){
    alert("Time to fancify your text");
    document.getElementById("textsize").style.fontWeight="bold";
    document.getElementById("textsize").style.textDecoration="underline";
    document.getElementById("textsize").style.color="blue";
}

function boring(){
    document.getElementById("textsize").style.fontWeight="normal";
    document.getElementById("textsize").style.color="black";
    document.getElementById("textsize").style.textDecoration="";
}

function getMoo(){
    var sampleText = document.getElementById("textsize");
    var text = sampleText.value;
    var parts = text.split(" ");
    for(let i = 0; i < parts.length; i++)
    {
        if(parts[i].includes('.'))
        {
            parts[i] = parts[i] + "-Moo";
        }
    }
    text = parts.join(" ");
    document.getElementById("textsize").value = text;
}
