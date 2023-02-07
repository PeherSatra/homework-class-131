img="";
_status = "";
function preload()
{
    img=loadImage('Bed room.jpeg');
}
function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
}
function modelLoaded()
{
    console.log("Model Loaded");
    _status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    else{
        console.log(results);
    }
}