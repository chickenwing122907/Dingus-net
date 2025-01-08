document.getElementById("proxy-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the URL from the input
    const url = document.getElementById("url-input").value;

    // Use a public proxy server to handle the request
    const proxyUrl = "https://corsproxy.io/?"; // Example proxy server

    // Construct the full proxy URL
    const fullUrl = proxyUrl + encodeURIComponent(url);

    // Load the proxied URL into an iframe
    const iframe = document.getElementById("proxy-frame");
    iframe.src = fullUrl;
    iframe.hidden = false;
});
