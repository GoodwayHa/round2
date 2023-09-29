//第一步把const改成了var因为示例教的var我怕以下格式有问题（小白是这样的）
//另外我去html那里给canvas加了width啥的，在这没写
var canvas=doucument.getElementById("ClockCanvas");
var ctx = canvas.getContext("2d");
var img=document.getElementById("ClockBoard.png")
//在画布里加图片也好难,学习自http://exuehao.com/article/detail/23
var image1= new Image();
var image2= new Image();
var image3= new Image();
var image4= new Image();
    
    image1.src="./src/ClockBoard.png";
    image2.src="./src/HourHand.png";
    image3.src="./src/MinuteHand.png";
    image4.src="./src/Bolt.png";

/*image.onload=function(){
    ctx.drawImage(image1, 0, 0);}
image.onload=function(){
    ctx.drawImage(image2, 0, 0);}
image.onload=function(){
    ctx.drawImage(image3, 0, 0);} 
image.onload=function(){
    ctx.drawImage(image4, 0, 0);}*/

//然后到这里又呆住了，出去试了一下,发现画布的位置差不多，改了下大小
//最主要的是为什么图片没有显示啊x
//然后发现了这个网址https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations
//尝试用在这个例子里失败了
function clock() {
    var now = new Date();
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.lineWidth = 8;
    ctx.lineCap = "round";}
//写到这里，确定自己肯定解决不了啦~时间不够遂放弃
