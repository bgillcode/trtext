document.body.addEventListener('mouseover', (e) => {
  if (e.target.textContent) {
    e.target.style.backgroundColor = 'green';

    e.target.parentNode.addEventListener('mouseout', () => {
      e.target.style.backgroundColor = '';
    });

    chrome.runtime.sendMessage({
      type: 'selectedText',
      textContent: e.target.textContent,
    });
  }
});
