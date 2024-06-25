const textarea = document.getElementById('textarea');
const charCountSpan = document.getElementById('char-count');
const lineCountSpan = document.getElementById('line-count');

textarea.addEventListener('input', () => {
  const text = textarea.value;
  const charCount = text.length;
  const lineCount = text.split('\n').length;

  charCountSpan.textContent = charCount;
  lineCountSpan.textContent = lineCount;
});
