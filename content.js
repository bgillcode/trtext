document.body.addEventListener('mouseover', (e) => {
  console.log(e, 'e');
  console.log(e.target);

  console.log(e.target.nodeType, 'e.target.nodeType');

  console.log(e.target.value);

  if (e.target.textContent) {
    const text = e.target.textContent;
    console.log(text, 'text');

    e.target.style.backgroundColor = 'green';

    e.target.parentNode.addEventListener('mouseout', () => {
      e.target.style.backgroundColor = '';
    });

    const API =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=';
    const sourceLanguage = 'en';
    const targetLanguage = 'ja';
    const textContent = encodeURI(e.target.textContent);

    fetch(
      `${API}${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${textContent}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'data');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});
