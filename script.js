const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderQuote(q) {
  quoteEl.textContent = `“${q.text}”`;
  authorEl.textContent = q.author ? `— ${q.author}` : "";

}

function newQuote() {
  renderQuote(pickRandom(QUOTES));
}

async function copyQuote() {
  const text = `${quoteEl.textContent} ${authorEl.textContent}`.trim();
  await navigator.clipboard.writeText(text);

  // quick feedback
  const old = document.title;
  document.title = "Copied!";
  setTimeout(() => (document.title = old), 600);
}

document.getElementById("newQuote").addEventListener("click", newQuote);
document.getElementById("copy").addEventListener("click", copyQuote);

// first load
newQuote();
