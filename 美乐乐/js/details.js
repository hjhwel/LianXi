/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-23 15:58:45
 * @version $Id$
 */
// 倒计时
$(function(){ 
    var oTimeFrame=document.getElementById('q-timeframe');
    var title=document.getElementById('title');
    var timeW=new Date(2018,07,31,09,45,00);
    var timeleft=null;
    var timeleft=setInterval(function(){
        var timeN=new Date();   //现在时间
        var timeNow=timeN.getTime();
        var timeWish=timeW.getTime();// 获取毫秒数
        var t=(timeWish-timeNow)/1000;
        var days=parseInt(t/60/60/24);
        var hours=parseInt(t/60/60%60);
        var minutes=parseInt(t/60%60);
        var seconds=parseInt(t%60);
        // days=checktime(days);
        hours=checktime(hours);
        minutes=checktime(minutes);
        seconds=checktime(seconds);
        oTimeFrame.innerHTML='<span id="title">美乐网</span>'+'<span id="bg-black">'+"距离开团还有&nbsp"+days+"&nbsp天&nbsp"+hours+"&nbsp:&nbsp"+minutes+"&nbsp:&nbsp"+seconds+"&nbsp&nbsp"+'</span>';
        if(t<=0){
        clearInterval(timeleft);
        oTimeFrame.innerHTML="抢购结束";
        }
    },10)
    function checktime(i){
        if (i>9) {
            return i;
        }else{
            return "0"+i;
        }
    }
})
// 商品tab
$(function(){
    var list = document.querySelector(".list");
    var img = document.querySelector(".pic img");
    var imgs = list.querySelectorAll("img");
    var pic = document.querySelector(".pic");
    var cover = document.querySelector(".cover");
    var detil = document.querySelector(".detil");
    list.addEventListener("mousemove",function(e){  
    //事件监听 实现大图小图对应
        if(e.target.tagName==="IMG"){
            img.src=e.target.src;
            detil.style.backgroundImage='url('+img.src+')';
            imgs.forEach(function(item){  
            //forEach方法遍历
             item.className="";
            })
            // for(var i=0;i<imgs.length;i++){ 
            // //for循环遍历
            //     imgs[i].className="";
            // }
            e.target.className="current";
        }
    })
    pic.addEventListener("mousemove",function(e){
        cover.style.display='block';
        detil.style.display='block';
        var x=e.clientX;    //鼠标离浏览器的左边距离
        var y=e.clientY;    //鼠标离浏览器的上面距离
        var cx = pic.getBoundingClientRect().left;  //大图离浏览器的左边距离
        var cy = pic.getBoundingClientRect().top;   //大图离浏览器的上边距离
        var tx = x-cx-75;
        var ty = y-cy-75;
        if (tx<0){
            tx=0;
        }
        if (ty<0){
            ty=0;
        }
        if (tx>320){
            tx=320;
        }
        if (ty>162){
            ty=162;
        }
        detil.style.backgroundPosition=tx/320*100+'%'+ty/162*100+'%';
        cover.style.left = tx + "px";
        cover.style.top = ty + "px";
    })
    pic.onmouseout=function(){
        cover.style.display='none';
        detil.style.display='none';
    }  
})