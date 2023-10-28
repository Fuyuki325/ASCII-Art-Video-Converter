# ASCII Art Video Converter

Welcome to the ASCII Art Video website! If you'd like to convert a video into ASCII art, you've come to the right place.

## Demo



https://github.com/Fuyuki325/ASCII-Art-Video-Converter/assets/120443522/f813e9c5-bb55-408c-8d72-1f55300baffc



## Getting Started

To use this website, follow these steps:

1. **Clone this Repository:** Start by cloning this repository to your local machine.

   
bash
   ```
   git clone https://github.com/Fuyuki325/ASCII-Art-Video-Converter.git
   ```
2. **Install Open Live Server Extension:** You will need the Open Live Server extension for your code editor to access the website locally. If you haven't installed it yet, you can find it in your code editor's extensions or plugins marketplace.

3. **Prepare Your Video:**

   - You'll need an `.mp4` video file to replace the default video on the website.
   - Ensure that the video is compatible with the website and contains the content you want to convert into ASCII art.
   - Place the video in your local cloned repository.

4. **Replace Default Video:**

   In the project directory, locate the lines of code that specify the default video(Bad Apple!!.mp4). You should find something like this in your HTML and Javascript files:
  
### index.html
   ```
   <main>
      <div id="videoContainer">
        <video id="myVideo" src="Bad Apple!!.mp4" muted loop></video>
        <button id="playButton" onclick="startVideo()">Play</button>
      </div>
      <div id="asciiDiv"></div>
    </main>
   ``` 
### sketch.js
  ```
  function setup() {
    noCanvas();
    video = createVideo('Bad Apple!!.mp4');
    const multiplier = 5;
  ```   
   Replace "Bad Apple!!.mp4" with the name of your .mp4 video file.

5. **Run the Website with Open Live Server:**

   - Launch your code editor and open the project folder.
   - Right-click on the HTML file (e.g., `index.html`), and select "Open with Live Server."

## Usage

Now, when you access the website using Open Live Server, you'll see your video displayed and ready for ASCII art conversion.

Enjoy converting your video into mesmerizing ASCII art!
