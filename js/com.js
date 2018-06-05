/**
 * Created by Administrator on 2018-05-17.
 */
$(function(){
    $('.scrollUl>li:gt(0)').mouseover(function(){
        var index = $(this).index()-1;
        $('.bor03>div,.bor04>div').hide();
        $('.bor03>div,.bor04>div').eq(index).show();
        $('.scrollUl>li:gt(0)').removeClass('sd01').addClass('sd02');
        $(this).addClass('sd01').removeClass('sd02');
    })

})
