function injectContentJS(tabID) {
    chrome.scripting.executeScript({
        target: { tabId: tabID },
        files: ["./content.js"]
    }).then(() => {
        console.log("Content script injected into this tab.");
    }).catch((err) => {
        console.error("Error injecting content script:", err);
    });
}

chrome.tabs.onCreated.addListener((tab) => {
    injectContentJS(tab.id)
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    if(changeInfo.status === "complete" && /^http/.test(tab.url)){
        injectContentJS(tabId)
    }
})


