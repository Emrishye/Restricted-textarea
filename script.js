"use strict";

const textarea = document.getElementById("mytextarea");
const charCount = document.getElementById("charcount");

const maxChars = 20;

textarea.addEventListener("input", function () {
  const currentLength = textarea.value.length;
  // updating the charcount
  charCount.textContent = `${currentLength} / ${maxChars}`;
  if (currentLength === maxChars) {
    textarea.classList.add("warning");
  } else if (currentLength < maxChars) {
    textarea.classList.remove("warning");
    textarea.classList.remove("warning");
  }
});
