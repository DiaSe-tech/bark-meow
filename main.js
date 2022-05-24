//https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json


function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelready);

}

function modelready() {
    classifier.classify(gotresults);

}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        img1=document.getElementById("img1");
        if(results[0].label=="Barking"){
            img1.src="bark.gif";
        }
        else if(results[0].label=="Meowing"){
            img1.src="meow.gif";
        }
        else{
            img1.src="hearing.gif";
        }



    }
}
