
document.getElementById('fetchTitle').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentTab = tabs[0]; // Get the active tab
    let title = currentTab.title; // Fetch the title of the active tab
    document.getElementById('titleDisplay').innerText = title; // Display the title
  });
});
