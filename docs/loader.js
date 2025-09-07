// Roam Toolkit Custom Loader
// Load the main entry script
(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://dawushi97.github.io/roam-toolkit-custom/entry.js';
    script.async = true;
    
    // Add error handling
    script.onerror = function() {
        console.error('Failed to load Roam Toolkit');
    };
    
    script.onload = function() {
        console.log('Roam Toolkit loaded successfully');
    };
    
    document.head.appendChild(script);
})();