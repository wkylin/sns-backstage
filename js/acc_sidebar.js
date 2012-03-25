// JavaScript Document

// author: wkylin 
// time:  2010-10-    
// link:  270917337@qq.com
// info:  acc_sidebar.js


$(document).ready(function(){

    if ($.browser.version == 6.0) {//解决ie6最宽度问题
        ie6width();
    }
    autoHeight();//左右分栏高度保持一致
    //左侧导航菜单
    $(".acc_subnav").hide();
    $(".acc_subnav:first").show();
    $("h2").click(function(){
        if ($(this).next().is(":hidden")) {
            $("h2").removeClass("active").next().slideUp();
            $(this).toggleClass("active").next().slideDown();
            return false;
        }
        return false;
    });
    
    
    //解决ie6和ie7的z-index问题
    var sns_search = $(".sns_search li");
    sns_search.each(function(index){
        $(this).css({
            "z-index": sns_search.length - index
        })
    });
    
    
});

//左右分栏高度保持一致
function autoHeight(){
    var side_bar_h = $(".sideBox").height();
    var content_h = $(".content").height();
    if (side_bar_h > content_h) {
        $(".content,.sideBox").height(side_bar_h);
        
    }
    else {
        $(".content,.sideBox").height(content_h);
    }
}

//解决ie6最宽度问题
function ie6width(){
    if ($.browser.msie && $.browser.version == 6.0) {
        $(window).resize(function bodySize(){
        
            var bWidth = ($(window).width() <= 1003) ? 1003 : "100%";
            $("body").width(bWidth);
        });
        bodySize();
    }
    
}
