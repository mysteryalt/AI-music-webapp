song1 = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristX = 0;
leftWristScore=0;
song1status = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(650,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
}


function draw() {
image(video , 0 , 0 , 650 ,500);

song1status = song1.isPlaying()

fill('red');
stroke('red')

if(leftWristScore > 0.2) {

    circle(leftWristX , leftWristY , 20);
    song2.stop();

    if(song1status == 'false') {

    document.getElementById("song_name").innerHTML = "Harry Potter Theme Song";
    }
}
}


function modelLoaded() {
    console.log("posenet has loaded")
    }
    
    function gotPoses(results) {
    
        if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X and Y= " + leftWristX + " " +  leftWristY );
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist X and Y = " + rightWristX + " " + rightWristY);
        
        leftWristScore = results[0].pose.keypoints[9].score;
    
    
    }
    
       
    }