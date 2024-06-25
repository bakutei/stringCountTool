const textarea = document.getElementById('textarea');
const charCountSpan = document.getElementById('char-count');
const lineCountSpan = document.getElementById('line-count');

textarea.addEventListener('input', () => {
  const text = textarea.value;
  const charCount = text.replace(/\s+/g, '').length; // スペースを除いた文字数をカウント
  const lineCount = text.split('\n').length;

  charCountSpan.textContent = charCount;
  lineCountSpan.textContent = lineCount;
});
