document.body.addEventListener('mouseover', (e) => {
  console.log(e, 'e');
  console.log(e.target);

  console.log(e.target.nodeType, 'e.target.nodeType');

  console.log(e.target.value);

  if (e.target.textContent) {
    let text = e.target.textContent;
    console.log(text, 'text');

    e.target.style.backgroundColor = 'green';

    e.target.parentNode.addEventListener('mouseout', () => {
      e.target.style.backgroundColor = '';
    });
  }
});
