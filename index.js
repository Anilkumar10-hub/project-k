document.getElementById('translateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value.trim();
    const fromLanguage = document.getElementById('fromLanguage').value;
    const toLanguage = document.getElementById('toLanguage').value;

    // Check if input text is empty
    if (!inputText) {
        document.getElementById('outputText').innerText = "Please enter text to translate.";
        return;
    }

    // Fetch translation from MyMemory API
    const apiKey = 'b604a13bdacdc6bbf259'; // Replace with your MyMemory API key
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${fromLanguage}|${toLanguage}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Display translated text
            if (data.responseStatus === 200) {
                document.getElementById('outputText').innerText = data.responseData.translatedText || "Translation failed.";
            } else {
                document.getElementById('outputText').innerText = "Translation failed. Please try again.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('outputText').innerText = "Translation failed. Please try again.";
        });
});