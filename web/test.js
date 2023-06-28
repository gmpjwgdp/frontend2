jQuery(document).ready(function($){
    $('.main').fadeIn(3000);
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight(); //ページ全体の高さ
var winh = $(window).innerHeight(); //ウィンドウの高さ
var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
if (bottom <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('#ABOUTUS').fadeIn(4000);
    });
  },500);
}
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight(); //ページ全体の高さ
var winh = $(window).innerHeight(); //ウィンドウの高さ
var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
if (bottom <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('.bot_cont').fadeIn(4000);
    });
  },1500);
};
});
$(window).on('scroll', function () {
var doch = $(document).innerHeight(); //ページ全体の高さ
var winh = $(window).innerHeight(); //ウィンドウの高さ
var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
if (bottom <= $(window).scrollTop()) {
  setTimeout(function(){
    jQuery(document).ready(function($){
        $('header').fadeIn(100);
    });
  },500);
}
});
