var recorder = null
const endpointUrl_upload = 'https://example.com/upload'
const endpointUrl_video = 'https://example.com/video/'
var videoID 
function onAccessApproved(stream){

    recorder = new MediaRecorder(stream);
    chunks = [];

    recorder.ondataavailable = function(event){
        let recordedBlob  = event.data;

        if (recordedBlob.size > 0) {
            chunks.push(recordedBlob);
            sendChunkToEndpoint(recordedBlob);
        }

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
    
    recorder.onstop = function(){
        stream.getTracks().forEach(function(track){
            if(track.readyState === "live"){
                track.stop()
            }
        })
        
        //const blob = new Blob(chunks, { type: 'video/webm' });
        //const videoUrl = URL.createObjectURL(blob);
        const videoPreviewUrl = `https://mnmkato.github.io/stage5/#/videoPreview${videoID}`;
        window.open(videoPreviewUrl, '_blank');
    }

    recorder.start();
    startTime = Date.now();
    isRecording = true;
    isPaused = false;
    updateUI();
    startTimer();
}

function sendChunkToEndpoint(chunk) {
    const formData = new FormData();
    formData.append('recordingChunk', chunk);

    fetch(endpointUrl_upload, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
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


chrome.runtime.onMessage.addListener( (message, sender, sendResponse)=>{

    if(message.action === "request_recording"){
        console.log("requesting recording")
        injectFloatingUI();
        sendResponse(`processed: ${message.action}`);

        navigator.mediaDevices.getDisplayMedia({ video: true, audio: true})
        .then((stream)=>{
            onAccessApproved(stream)
        })
        .catch((error) => {
            console.error('Error accessing media devices:', error);
        });
    }

})
