function postComment() {
  const input = document.getElementById("commentInput");
  const commentText = input.value.trim();
  if (!commentText) return;

  const isToxic = detectToxicity(commentText);

  const commentList = document.getElementById("commentList");
  const li = document.createElement("li");
  li.textContent = commentText;

  if (isToxic) {
    li.classList.add("toxic");
    li.textContent += " 🚩 (Toxic Comment)";
  }

  commentList.appendChild(li);
  input.value = "";
}

// Simple fake detector for demo
function detectToxicity(text) {
  const toxicWords = ["stupid", "hate", "idiot", "dumb", "trash", "ugly"];
  const lower = text.toLowerCase();
  return toxicWords.some((word) => lower.includes(word));
}
