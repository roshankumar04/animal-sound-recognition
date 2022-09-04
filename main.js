function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3HKXQC6vQ/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
 function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="i can hear-"+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById('cat meowing');
        img1=document.getElementById('dog barking');
        img2=document.getElementById('lion roar');
        img3=document.getElementById('cow mooing');

        if(results[0].label=="meowing"){
            img.src='cat meowing.gif';
            img1.src='dog barking.png';
            img2.src='lion roar.png';
            img3.src='cat mooing.png';
        }
        else if(results[0].label=="barking"){
            img.src='cat meowing.png';
            img1.src='dog barking.gif';
            img2.src='lion roar.png';
            img3.src='cow mooing.png';

        }
        else if(results[0].label=="roar"){
            img.src='cat meowing.png';
            img1.src='dog barking.png';
            img2.src='lion roar.gif';
            img3.src='cow mooing.png';
            
        }
        else if(results[0].label=="mooing"){
            img.src='cat meowing.png';
            img1.src='dog barking.png';
            img2.src='lion roar.png';
            img3.src='cow mooing.gif';
            
        }
    }
    }
    
 