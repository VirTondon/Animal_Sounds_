function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/kqyWaI4-a/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    
    console.log(results);
    img = document.getElementById('animal_image');
    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
    if (results[0].label == "Barking") {
      img.src = 'bark copy.gif';
      dog = dog+1;
    } else if (results[0].label == "meowing") {
      img.src = 'meow copy.gif';
      cat = cat + 1;
    } else{
      img.src = 'listen copy.gif';
    }
  }
}