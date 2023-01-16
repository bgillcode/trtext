document.body.addEventListener('mouseover', (e) => {
  if (e.target.textContent) {
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
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data, 'data');
      })
      .catch((err) => {
        console.error('Error occurred: ', err);
      });
  }
});
