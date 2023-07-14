// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox.png');
    }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'one piece 真的酷毙了，' + myName;
  }
}

//初始化代码
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'one piece 真的酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
   setUserName();
};