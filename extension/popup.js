document.addEventListener('DOMContentLoaded', () => {
    let isRecording = false;
    let isPaused = false;
    let mediaRecorder;
    let chunks = [];
    let startTime;
    let timerInterval;

    const startButton = document.getElementById('startButton');
    //const pauseButton = document.getElementById('pauseButton');
    //const stopButton = document.getElementById('stopButton');
    //const toggleCameraButton = document.getElementById('toggleCamera');
    //const toggleMicrophoneButton = document.getElementById('toggleMicrophone');
    //const deleteRecordingButton = document.getElementById('deleteRecording');
    //const durationSpan = document.getElementById('duration');

    startButton.addEventListener('click', startRecording);
    //pauseButton.addEventListener('click', togglePause);
    //stopButton.addEventListener('click', stopRecording);
    //toggleCameraButton.addEventListener('click', toggleCamera);
    //toggleMicrophoneButton.addEventListener('click', toggleMicrophone);
    //deleteRecordingButton.addEventListener('click', deleteRecording);
    function startRecording() {
        if (isRecording) {
            console.log('Recording is already in progress.');
            return;
        }
    
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "request_recording" }, function (response) {
                if (!chrome.runtime.lastError) {
                    console.log(response);
    
                    // Send a message to the content script to show the floating UI.
                    // chrome.tabs.sendMessage(tabs[0].id, { action: "show_floating_ui" }, function (response) {
                    //     if (!chrome.runtime.lastError) {
                    //         console.log('Floating UI request sent.');
                    //     } else {
                    //         console.log(chrome.runtime.lastError, 'error sending floating UI request');
                    //     }
                    // });
                } else {
                    console.log(chrome.runtime.lastError, 'error');
                }
            });
        });
    }
    
    function togglePause() {
        // Toggle pause/resume recording.
        // Update UI accordingly.
    }

    function stopRecording() {
        // Stop recording and save the video.
        // Display a link to the recorded video for preview.
        // Update UI.
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "stopvideo"},  function(response){
                if(!chrome.runtime.lastError){
                    console.log(response)
                } else{
                    console.log(chrome.runtime.lastError, 'error')
                }
            })
        } )
    }

    function toggleCamera() {
        // Toggle camera on/off if video is being recorded.
        // Update UI.
    }

    function toggleMicrophone() {
        // Toggle microphone on/off if video is being recorded.
        // Update UI.
    }

    function deleteRecording() {
        // Delete the recorded video.
        // Update UI.
    }

    function updateDuration() {
        // Update the recording duration in the UI.
    }
});
