var floatingUI=null
var recorder = null
var videoID = 1
function onAccessGranted(cameraStream,screenStream){
    const cameraVideo = document.createElement('video');
        cameraVideo.srcObject = cameraStream;
        cameraVideo.autoplay = true;
        cameraVideo.muted = true;
        cameraVideo.style.transform = 'scaleX(-1)'
        cameraVideo.style.width="auto"
        cameraVideo.style.height="100%"

        floatingUI = null
        if (!floatingUI) {
            createFloatingUI();   
        }    else{
            console.log(" floatingUI already exists")
        }
        
        document.getElementById('Avatar-ui').innerHTML=''
        document.getElementById('Avatar-ui').appendChild(cameraVideo);
        
        const stream = new MediaStream();

        // Add video track from screenStream
        stream.addTrack(screenStream.getVideoTracks()[0]);
        
        // Add audio tracks from cameraStream
        cameraStream.getAudioTracks().forEach((track) => {
            stream.addTrack(track);
        });

        recorder = new MediaRecorder(stream, {mimeType: 'video/webm;codecs=vp9'});
        
        chunks = [];

        recorder.ondataavailable = function(event){
            let recordedBlob  = event.data;

            if (recordedBlob.size > 0) {
                chunks.push(recordedBlob);
                console.log("new chunk added to array")
                sendChunkToEndpoint(recordedBlob);
            }
            //downloadBlob(recordedBlob)
        }
        recorder.onstop = function(){
            screenStream.getTracks().forEach(function(track){
                if(track.readyState === "live"){
                    track.stop()
                }
            })
            cameraStream.getTracks().forEach(function (track) {
                track.stop();
            });

            document.body.removeChild(floatingUI)       
            const blob = new Blob(chunks, { type: 'video/webm' });
            downloadBlob(blob)
            console.log("downloaded combined chunks in array")
            //const videoUrl = URL.createObjectURL(blob);
            const videoUrl = `https://mnmkato.github.io/stage5/#/videoPreview/${videoID}`;
            window.open(videoUrl, '_blank');
        }

        recorder.start(3000);
     
}
function downloadBlob(recordedBlob) {
    let url = URL.createObjectURL(recordedBlob);

    let a = document.createElement("a");

    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording.webm"
    
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function sendChunkToEndpoint(chunk) {
    const formData = new FormData();
    formData.append('recordingChunk', chunk);

    fetch('https://hng-ce-backend.onrender.com/api/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.error('Rsponse OK:');
            return response.json();
        } else {
            console.error('Error sending chunk:', response.statusText);
            throw new Error('Chunk upload failed');
        }
    })
    .then(data => {
        if (data.recording_id) {
            console.log('Chunk sent successfully. Recording ID:', data.recording_id);
            videoID = data,recording_id;
        } else {
            console.error('Error: Recording ID not found in the response.');
        }
    })
    .catch(error => {
        console.error('Error sending chunk:', error);
    });
}

function createFloatingUI() {
floatingUI = document.createElement('div');
floatingUI.id = 'my-floating-ui';
    
    
// Set the styles for the floating UI
floatingUI.style.position = 'sticky';
floatingUI.style.left = '8px';
floatingUI.style.bottom = '8px';
floatingUI.style.display = 'flex';
floatingUI.style.alignItems = 'center';

// Create and append the image
const Avatar = document.createElement('div');
Avatar.id = 'Avatar-ui';
Avatar.style.height = '160px';
Avatar.style.width = '160px';
Avatar.style.borderRadius = '50%';
Avatar.style.marginLeft="1rem"
Avatar.style.marginRight="1rem"
Avatar.style.overflow="hidden"
floatingUI.appendChild(Avatar);

const avatarImage = document.createElement('img');
avatarImage.src = chrome.runtime.getURL('Avatar.png');
avatarImage.alt = '';
Avatar.appendChild(avatarImage);

// Create the icon container
const iconContainer = document.createElement('div');
iconContainer.id = 'icon-container';

// Set styles for the icon container
iconContainer.style.display = 'flex';
iconContainer.style.justifyContent = 'center';
iconContainer.style.alignItems = 'center';
iconContainer.style.gap = '10px';
iconContainer.style.borderRadius = '4rem';
iconContainer.style.padding = '0.8rem 2rem';
iconContainer.style.backgroundColor = 'black';
iconContainer.style.marginLeft = '1rem';

// Create and append the counter
const counterSpan = document.createElement('span');
counterSpan.classList.add('counter');
counterSpan.textContent = '00:03:45';
iconContainer.appendChild(counterSpan);

// Create and append the divider image
const recImage = document.createElement('img');
recImage.src = chrome.runtime.getURL('rec.png');
recImage.alt = '';
recImage.classList.add('rec');
iconContainer.appendChild(recImage);

// Create and append the divider SVG image
const dividerSVGImage = document.createElement('img');
dividerSVGImage.src = chrome.runtime.getURL('divider.svg');
dividerSVGImage.alt = '';
dividerSVGImage.classList.add('divider');
dividerSVGImage.style.marginLeft="1rem"
dividerSVGImage.style.marginRight="1rem"
iconContainer.appendChild(dividerSVGImage);

// Define an array of icon data
const icons = [
    { src: chrome.runtime.getURL('pause_ic.png'), text: 'Pause', onClickFn: pauseRecording },
    { src: chrome.runtime.getURL('stop_ic.png'), text: 'Stop' , onClickFn: stopRecording },
    { src: chrome.runtime.getURL('cam_ic.png'), text: 'Camera' , onClickFn: toggleMic },
    { src: chrome.runtime.getURL('mic_ic.png'), text: 'Mic' , onClickFn: toggleCam },
];

// Iterate over the icon data and create individual icon elements
icons.forEach(iconData => {
    const iconItem = document.createElement('div');
    iconItem.classList.add('icon-item');
    iconItem.style.display = "flex"
    iconItem.style.flexDirection = "column"
    iconItem.style.justifyContent = "space-between"

    const iconImage = document.createElement('img');
    iconImage.classList.add('icon');
    iconImage.src = iconData.src;
    iconImage.alt = iconData.text;
    iconImage.style.width="44px"
    iconImage.style.height="44px"
    iconImage.addEventListener("click",iconData.onClickFn)

    const iconText = document.createElement('p');
    iconText.classList.add('icon-text');
    iconText.textContent = iconData.text;
    iconText.style.marginTop="10px"
    iconText.style.marginBottom="0"
    iconText.style.textAlign="center"

    iconItem.appendChild(iconImage);
    iconItem.appendChild(iconText);

    iconContainer.appendChild(iconItem);
});

// Create and append the delete icon
const deleteIcon = document.createElement('img');
deleteIcon.classList.add('icon', 'delete');
deleteIcon.src = chrome.runtime.getURL("delete.png");
deleteIcon.style.marginLeft="1rem"
deleteIcon.alt = '';
iconContainer.appendChild(deleteIcon);

// Append the icon container to the floating UI
floatingUI.appendChild(iconContainer);

// Append the floating UI to the document body
document.body.appendChild(floatingUI);
}
function pauseRecording() {
    if (recorder.state === "recording") {
        recorder.pause();
        console.log("recording paused");
      } else if (recorder.state === "paused") {
        recorder.resume();
        console.log("recording resumed");
      }
}
function stopRecording() {
    recorder.stop()
}
function toggleMic() {
    
}
function toggleCam() {
    
}
chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=>{

    if(message.action === "request_recording"){
        console.log("requesting recording")
       
        sendResponse(`processed: ${message.action}`);
        
        navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: false
        }).then((screenStream) => {
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            }).then((cameraStream) => {
                onAccessGranted(cameraStream,screenStream)
            }).catch((error) => {
                console.error('Error accessing camera and microphone:', error);
            });
        }).catch((error) => {
            console.error('Error accessing media devices:', error);
        });               
    }

})
