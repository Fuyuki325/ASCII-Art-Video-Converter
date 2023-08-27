const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let video;
let asciiDiv;
let playButton;

function setup() {
  noCanvas();
  video = createVideo('Bad Apple!!.mp4');
  const multiplier = 5;
  video.size(16 * multiplier, 9 * multiplier);
  video.hide();
  asciiDiv = select('#asciiDiv');

  // Get a reference to the play button element
  playButton = select('#playButton');
  playButton.mousePressed(startVideo);
}

function startVideo() {
  video.loop();
  playButton.style('display', 'none'); // Hide the play button once the video starts
}

function draw() {
  video.loadPixels();
  let asciiImage = '';
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));

      const c = density.charAt(charIndex);
      if (c == '') asciiImage += '&nbsp;';
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
