document.getElementById("download").addEventListener("click", exec);

function exec(){
  chrome.tabs.executeScript(null,
    {file:"script.js"},
    () => console.log("Download started"));
}
