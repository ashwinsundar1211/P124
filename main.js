function setup()
{
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.position(100, 70);

  canvas = createCanvas(350, 350);
  canvas.position(760, 0);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw()
{
  background('lightgreen')
}

function modelLoaded()
{
  console.log('posenet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
    {
      console.log(results);
    }
}