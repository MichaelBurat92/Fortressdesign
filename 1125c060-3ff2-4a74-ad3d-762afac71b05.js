// URL zur JavaScript-Datei auf GitHub
      const scriptURL = 'https://raw.githubusercontent.com/MichaelBurat92/Fortressdesign/main/mozire.js';
     
     // Eine Funktion, um den Inhalt der Datei zu holen und in ein <script>-Tag einzufügen
     function loadScript(url) {
         fetch(url)
             .then(response => {
                 if (!response.ok) {
                     throw new Error('Network response was not ok');
                 }
                 return response.text();
             })
             .then(scriptContent => {
                 const scriptElement = document.createElement('script');
                 scriptElement.textContent = scriptContent;
                 document.head.appendChild(scriptElement);
             })
             .catch(error => {
                 console.error('There was a problem with the fetch operation:', error);
             });
     }
     
     // Aufruf der Funktion, um den Inhalt der Datei zu laden und in ein <script>-Tag einzufügen
     loadScript(scriptURL);
  

 // URL of the CSS file on GitHub
 const cssURL = 'https://raw.githubusercontent.com/MichaelBurat92/Fortressdesign/main/theme.css';

// Function to load and inject the CSS into the <style> tag
function loadCSS(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(cssContent => {
            const styleTag = document.getElementById('custom-css');
            styleTag.textContent = cssContent;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function to load and inject the CSS
loadCSS(cssURL);
