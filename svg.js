//let myHeading = document.querySelector('h1');//querySelector()函数获取标题的引用，并把它存在myHeading变量中
//myHeading.textContent = 'Hello world!';//textContent属性表示标题内容
let typeImage=document.querySelector('img');
typeImage.onclick=function(){
    let mySrc = typeImage.getAttribute('src');
    if(mySrc === 'min.png') {
        typeImage.setAttribute('src', 'mid.png');
      }else if(mySrc === 'mid.png') {
        typeImage.setAttribute('src', 'max.png');
      }else if(mySrc === 'max.png') {
        typeImage.setAttribute('src', 'min.png');
      }
}