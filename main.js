noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/VsHj6DDZ/reindeer-nose-clown-red-circle-material-property-png-clipart-thumbnail.jpg")
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX-15,noseY-15,30,30);
}


function take_snapshot(){
    save("myrealtimepicture.jpg");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX= results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("mose x="+ results[0].pose.nose.x);
console.log("nose y ="+results[0].pose.nose.y);
}
}