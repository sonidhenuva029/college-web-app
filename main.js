setTimeout(function()
{
    img_id = "selfie_1";
    take_snapshot();
    speak_data = "Taking your sefie in 10 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);

function take_snapshot(){

    console.log(img_id)

    Webcam.snap(function(data_uri){
        if(img_id=="selfie_1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+ data_uri + '"/>';
        }

        if(img_id=="selfie_2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+ data_uri + '"/>';
        }

        if(img_id=="selfie_3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+ data_uri + '"/>';
        }

    })
};

