var SpeechRecognition=window.webkitSpeechRecogntion;

var recognition= new SpeechRecognition();


function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
} 