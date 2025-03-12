let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
let clickCount = 0; // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗...",
    "要不再想想？",
    "不许选这个！",
    "我会很伤心...",
    "不行:("
];

// 图片变化的数组
const images = [
    "images/2.png", // 震惊
    "images/3.png", // 思考
    "images/4.png", // 生气
    "images/5.png", // 伤心
    "images/5.png"  // 之后一直是哭
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    
    // 图片和文字向上移动
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount <= 5) {
        mainImage.src = images[clickCount - 1]; // 使用 images 数组更新图片
    }
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!!（>.<）</h1>
            <img src="images/6.png" alt="拥抱" class="yes-image" style="width: 300px;"> <!-- 设置适中的大小 -->
        </div>
    `;
    document.body.style.overflow = "hidden";
});