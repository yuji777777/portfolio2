const popupContainer = document.getElementById("popupContainer");
const popupImage = document.getElementById("popupImage");
const popupTrigger = document.querySelectorAll(".popup-trigger");

popupTrigger.forEach(trigger => {
  trigger.addEventListener("mouseover", () => {
    const src = trigger.getAttribute("data-src");
    popupImage.src = src;
    popupContainer.style.display = "block";
    const rect = trigger.getBoundingClientRect();
    popupContainer.style.left = `${rect.left - 20}px`; // 少し左に移動
    popupContainer.style.top = `${rect.top - popupContainer.offsetHeight}px`; // 画像の上にポップアップ
  });

  trigger.addEventListener("mouseout", () => {
    popupContainer.style.display = "none";
  });
});