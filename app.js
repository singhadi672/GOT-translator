let selectedLang = document.querySelector("#select-language");
let button = document.querySelector("#btn-translate");
let inputText = document.querySelector("#txt-input");
let outputText = document.querySelector("#txt-translated");

function errorHandler(error){
    console.log("error is " + error);
    alert("there is an error....please try after some time!!");
}

button.addEventListener("click",()=>{
    let url = "https://api.funtranslations.com/translate/";
    let language = selectedLang.value;
    if(language==="Valyrian"){
        url = url + "valyrian.json" +"?text=" + inputText.value;
    }
    else if(language==="Dothraki")
    {
        url = url + "dothraki.json" +"?text=" + inputText.value;
    }
    else{
        url = url + "hodor.json" +"?text=" + inputText.value;
    }

    fetch(url).then(response => response.json())
    .then(json => outputText.innerText = json.contents.translated)
    .catch(errorHandler);
})