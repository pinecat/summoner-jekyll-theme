var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach((block) => {
  var copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.ariaLabel = 'Copy code to clipboard';
  copyBtn.innerHTML = '<img src="/assets/img/copy.svg" />';

  block.prepend(copyBtn);

  copyBtn.addEventListener('click', () => {
    var code = block.querySelector('code').innerText.trim();
    window.navigator.clipboard.writeText(code);

    copyBtn.innerHTML = '<img src="/assets/img/check.svg" />';
    copyBtn.style.border = '1px solid #64CC70';

    setTimeout(() => {
      copyBtn.innerHTML = '<img src="/assets/img/copy.svg" />';
      copyBtn.style.border = '1px solid #ffffff';
      document.activeElement.blur();
    }, 3000);
  });

  block.addEventListener('blur', () => {
    copyBtn.style.opacity = '0';
  });
});
