/**
 * Created by Administrator on 2016/10/22.
 */
require.config({
    baseUrl:"js/",
    paths:{//更改路径名称
        sp:"swiper",
        sa:"swiper.animate1.0.2.min",
        fd:"flexible.debug",
        fc:"flexible_css.debug",
        rq:"require"
    },
shim:{
    'sp':{
        exports:"sp"
    },
    'sa':{
        deps:["sp"],
        exports:"sa"
    },
    'fd':{
      exports:"fd"
    },
    'fc':{
        exports:"fc"
    },
    'rq':{
      exports:"rq"
    }
}
});
require(["sp","sa","fd","fc","rq"],function(sp,sa,fd,fc,rq){
    var mySwiper = new Swiper ('.swiper-container', {
        loop:"true",
//            effect:"coverflow",
//            watchSlidesProgress : true,
//            watchSlidesVisibility : true,
        autoplay:5000,

        paginationType : 'fraction',
        pagination:".swiper-pagination",
        onInt:function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd:function(swiper){
            swiperAnimate(swiper);
        }
    });

    var music = document.querySelector(".music");
    var note = document.querySelector(".music-note");
    var audio = document.querySelector("audio");

    music.addEventListener("click",function(){
        if(audio.paused){
            // alert("2");
            audio.play();
            note.style.zIndex=2;
            music.style.animationPlayState = "running";
        }else{
            // alert("1");
            audio.pause();
            note.style.zIndex=-1;
            music.style.animationPlayState = "paused";
        }
    })




});