
  // 画像要素とポップアップ要素を取得
  const selectedImage = document.getElementById('selectedImage');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');

  // 画像要素がクリックされたときの処理
  selectedImage.addEventListener('click', function(event) {
    // ポップアップを表示する
    popup.style.display = 'block';
    // クリックイベントの伝搬を停止する
    event.stopPropagation();
  });

  // クローズボタンがクリックされたときの処理
  closeBtn.addEventListener('click', function(event) {
    // ポップアップを非表示にする
    popup.style.display = 'none';
    // クリックイベントの伝搬を停止する
    event.stopPropagation();
  });

  // ポップアップがクリックされたときの処理
  popup.addEventListener('click', function(event) {
    // クリックイベントの伝搬を停止する
    event.stopPropagation();
  });

  // ドキュメント全体がクリックされたときの処理
  document.addEventListener('click', function() {
    // ポップアップを非表示にする
    popup.style.display = 'none';
  });
