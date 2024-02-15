// 画像要素を取得
let img = document.querySelector('.map_img img');
let imgContainer = document.querySelector('.map_img');

// アイコンの情報を保存する配列
let icons = [];

// アイコンを作成する関数
// createIconという名前で関数を定義し、引数をeという変数に格納して受け取る
function createIcon(e) {
    // クリック位置を計算
    let rect = img.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // クリック位置が画像の範囲内であるか確認
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        // アイコンの相対位置を計算
        let relativeX = x / rect.width;
        let relativeY = y / rect.height;

        // アイコンの情報を保存
        icons.push({ relativeX, relativeY });

        // アイコンを描画
        drawIcons();
    }
}

// アイコンを描画する関数
function drawIcons() {
    // 既存のアイコンを全て削除
    imgContainer.querySelectorAll('.icon').forEach(icon => icon.remove());

    // 新しいアイコンを作成
    let rect = img.getBoundingClientRect();
    icons.forEach(({ relativeX, relativeY }) => {
        let icon = document.createElement('img');
        icon.src = '../icons/flag.svg'; // アイコン画像のパスを設定
        icon.className = 'icon';
        icon.style.position = 'absolute';

        // アイコンの位置を設定
        icon.style.left = `${relativeX * rect.width}px`;
        icon.style.top = `${relativeY * rect.height}px`;

        // アイコンをクリックしたら削除
        icon.addEventListener('click', function() {
            // アイコンの情報を配列から削除
            icons = icons.filter(i => i !== icon);
            // アイコン要素を削除
            this.remove();
        });

        // アイコンを画像の親要素に追加
        imgContainer.appendChild(icon);
    });
}

// 画像をクリックしたらアイコンを作成
img.addEventListener('click', createIcon);

// ウィンドウがリサイズされたらアイコンを再描画
window.addEventListener('resize', drawIcons);

function sum(){
  140000 + 27900 + 16149 + 18000 + 50000
  }
console.log(sun());


