var codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach((block) => {
  var copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.ariaLabel = 'Copy code to clipboard';
  copyBtn.innerHTML = '<img src="/assets/img/copy.svg" />';

  block.prepend(copyBtn);

  copyBtn.addEventListener('click', () => {
    var code = block.querySelector('code').innerText.trim();

    if (window.isSecureContext) {
      window.navigator.clipboard.writeText(code);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = code;
            
        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
            
        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }


    copyBtn.innerHTML = '<img src="/assets/img/check.svg" />';
    copyBtn.style.border = 'none';

    setTimeout(() => {
      copyBtn.innerHTML = '<img src="/assets/img/copy.svg" />';
      copyBtn.style.border = 'none';
      document.activeElement.blur();
    }, 3000);
  });

  block.addEventListener('blur', () => {
    copyBtn.style.opacity = '0';
  });
});
