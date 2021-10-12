const { ipcRenderer } = require('electron');

window.onload = function() {
    const btnEl = document.getElementById('btn');

    btnEl.addEventListener('click', function() {
        const inputValue = document.getElementById('text-input').value;

        ipcRenderer.send('onInputValue', inputValue);
    });

    ipcRenderer.on('replyInputValye', (evt, payload) => {
        document.getElementById('text-box').textContent = payload;
    });

    ipcRenderer.on('onWebcontentsValue', (evt, payload) => {
        document.getElementById('text-box').textContent = payload;
    });
}