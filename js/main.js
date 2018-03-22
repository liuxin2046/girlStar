var cans;
var ctx;
var switchy;
var star = [];
var num = 60;
var lastTime = 0;
var deltaTime = 0;
var life = 0;
var girlPic = new Image();
var starPic = new Image();
document.body.onload = init;
function init(){
    cans = document.getElementById("canvas");
    ctx = cans.getContext("2d");
    girlPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";
    document.addEventListener("mousemove",mousemove);
    for(var i=0;i<num;i++){
        star[i] = new starObj();
       // var obj = new starObj();
        //star.push(obj); //将对象加入到数组，这样数组的每一个元素都可调用对象的方法
        star[i].init();
    }
    lastTime = Date.now();
    gameloop();
}
function gameloop(){
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    window.requestAnimationFrame(gameloop);
    drawBackground();
    drawGirl();
    aliveUpdate();
    drawStar();
    //console.log(deltaTime);
}
function drawBackground(){
    ctx.fillStyle = "#393550";
    ctx.fillRect(0,0,cans.width,cans.height);

}
function drawGirl(){
    ctx.drawImage(girlPic,100,150,600,300);
}
function mousemove(e){
    if(e.offsetX || e.layerX){
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
        // console.log(px+" : "+py);
        if(px > 100 && px <700 && py > 150 && py < 450){
            switchy = true;
        }
        else{
            switchy = false;
        }
    }
}