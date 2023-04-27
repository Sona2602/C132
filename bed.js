img = "";
Status = "";
function home()
{
    window.location = "index.html";
}
function setup()
{
    canvas = createCanvas(550,330);
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw()
{
    image(img,0,0,550,330);
}
function preload()
{
    img = loadImage("bedroom.jpg");
}
function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetection.detect(img,gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}
