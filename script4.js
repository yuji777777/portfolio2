const heading = document.getElementById("heading");
const message = document.getElementById("message");
const langButton = document.getElementById("langButton");

langButton.addEventListener("click", () => {
  // 現在の言語が日本語なら英語に、そうでなければ日本語に切り替える
  if (document.documentElement.lang === "ja") {
    document.documentElement.lang = "en";
    heading.textContent = "Hello, World!";
    message.textContent = "This is a sample text in English.";
    langButton.textContent = "Switch to Japanese";
  } else {
    document.documentElement.lang = "ja";
    heading.textContent = "こんにちは、世界！";
    message.textContent = "これは日本語のサンプルテキストです。";
    langButton.textContent = "Switch to English";
  }
});
