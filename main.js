noseX=0;
noseY=0;
function preload(){
mustach=loadImage('https://i.postimg.cc/3x3QzSGq/m.png' );
}

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
       noseY=results[0].pose.nose.y;
       noseX=results[0].pose.nose.x;
       console.log("nose x ="+noseX);
       console.log("nose y ="+noseY);
    }
}
function draw(){
image(video,100,100,400,400);
rect(50,40,500,30);
rect(550,50,30,500);
rect(50,550,30,-500);
rect(550,550,-500,30);
circle(50, 50, 50);
circle(550, 50, 50);
circle(50, 550, 50);
circle(550, 550, 50);

}

function take_snapshot(){
    save('myFilterImage.png');
    
}
