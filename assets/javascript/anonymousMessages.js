document.querySelector("form").addEventListener("submit", function (e) {
  const textarea = this.querySelector("textarea");
  const button = this.querySelector("button");
  
  if (textarea.value.trim().length === 0) {
    e.preventDefault();
    const originalText = button.textContent;
    button.textContent = "➤ The message field is required!";
    button.disabled = true;
  
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 3000);
  }
});
  
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("countdown-text");
  
  let timeLeft = 10;
    button.disabled = true;
    button.textContent = `➤ Send (${timeLeft})`;
  
  const timer = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      button.textContent = `➤ Send (${timeLeft})`;
    } else {
      clearInterval(timer);
      button.disabled = false;
      button.textContent = "➤ Send";
    }
  }, 1000);
});