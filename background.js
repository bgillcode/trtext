chrome.runtime.onMessage.addListener((message, sender) => {
  const { type, textContent } = message;

  if (type === 'selectedText') {
    const apiURL =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=';
    const sourceLanguage = 'en';
    const targetLanguage = 'ja';
    const text = encodeURI(textContent);
    const constructed = `${apiURL}${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${text}`;

    fetch(constructed, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
    })
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
