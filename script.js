const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const shareEl  = document.getElementById("share");

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderQuote(q) {
  quoteEl.textContent = `“${q.text}”`;
  authorEl.textContent = q.author ? `— ${q.author}` : "";

  // Share link (Twitter/X intent; you can swap to something else)
  const shareText = `${q.text}${q.author ? " — " + q.author : ""}`;
  shareEl.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
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
