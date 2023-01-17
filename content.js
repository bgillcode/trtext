document.body.addEventListener('mouseover', (e) => {
  if (e.target.textContent) {
    e.target.parentNode.addEventListener('mouseout', () => {
      e.target.style.backgroundColor = '';
    });

    // On click, select the text and highlight it and send it
    e.target.parentNode.addEventListener('click', () => {
      e.target.style.backgroundColor = 'green';

      chrome.runtime.sendMessage({
        type: 'selectedText',
        textContent: e.target.textContent,
      });
    });
  }
});
