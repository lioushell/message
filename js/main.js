/**
 * Created by panjiang on 2016/9/7.
 */


$(function () {
    //console.log($(".container").innerWidth());
    //获取列表页 内容区域的高度
    var contentheight = parseInt($(".container").innerHeight()-($("header").height()+$("footer").innerHeight()));
    $(".content").height(contentheight)

    //获取留言列表页 聊天框的高度
    var msgcontentHeight = window.innerHeight-($(".header").height()+$(".sendMessage").innerHeight());
    $(".messageContent").height(msgcontentHeight);
    //设置聊天发送框的宽度
    $(".fasong-input").width(window.outerWidth-($(".showface").width()+$(".btn-fasong").width()+32));
    //设置信息显示框的宽度
    var maxWidth = window.outerWidth-($(".msghead").width()+12+30);
    if($(".msgcont").width() >= maxWidth){
        $(".msgcont").width(maxWidth);
    }
    /*$(".msgcont").maxWidth = maxWidth;*/
    //console.log($(".msgcont").width());
})

/*
 * 列表页
 * */
/*页首导航栏切换*/
$(".nav span").each(function(index){
    $(this).click(function(){
        $(".nav span").removeClass("active");
        $(".nav span").eq(index).addClass("active");
    });
});

/*发送私信按钮*/
$(".btn-send").on("touchstart", function () {
    $(".container").addClass("none");
    $(".personaldetail").removeClass("none");
})

/*页尾导航栏切换*/
$(".footer div").each(function(index){
    $(this).click(function(){
        $(".footer div a span").removeClass("active");
        $(".footer div a span").eq(index).addClass("active");
        //字体颜色
        $(".footer div a").css("color","#666");
        $(".footer div a").eq(index).css("color","#5e9ce7");
    });
});

/*
 * 私信详情页
 * */
/*私信详情页 返回按钮*/
$(".detail-back").on("touchstart", function () {
    $(".container").removeClass("none");
    $(".personaldetail").addClass("none");
})

/*发送按钮*/
$(".btn-fasong").on("touchstart", function () {
    if($(".msgInput").val()!= ""){
        var str = "<div class='send-msg'><span class='msghead send-head'></span><p class='msgcont sendMsg-cont'>"+$('.msgInput').val()+"</p></div>";
        $(".showCont").append(str);
        /*console.log($(document).height());
         console.log($(".send-msg").offset().top);*/

         /*if($(".showCont").height() >= $(".messageContent").height()){

         }else{

         }*/
        console.log($(".showCont").height()+"  "+document.body.scrollHeight);
        $(".showCont").scrollTop = $(".showCont")[0].scrollHeight;
        alert(window.outerHeight);
    }
})
