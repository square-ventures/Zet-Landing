// Function to get the value of a specific query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to handle the anchor click event
function onAnchorClick(event) {
    event.preventDefault(); // Prevent the default anchor click behavior

    const btag = getQueryParam('btag'); // Get the 'btag' query parameter
    const newUrl = event.currentTarget.href + (btag ? `?btag=${btag}` : ''); // Append 'btag' to the URL

    window.location.href = newUrl; // Redirect to the new URL
}

// Add click event listeners to all anchor elements
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', onAnchorClick);
});