$(function(){
    
    // 검색창 
    $('.fixed-nav #search').focus(function(){
        $('.popup-search').show();
    });

    $('.popup-control button').click(function(){
        $('.popup-search').hide();
    });

    $('.popup-search .tab-nav li').click(function(e){

        e.preventDefault();

        var id=$(this).children('a').attr('href');

        $('.popup-search .tab-nav li').removeClass('active');
        $(this).addClass('active');

        $('.popup-search .contents div#now, .popup-search .contents div#recent').hide();
        $(id).show();

    });

    $('.popup-search .contents div a').click(function(e){

        e.preventDefault;

        var keyword=$(this).text();
        $('input').val(keyword);

    });

    $('#recent button').click(function(){

        $(this).parent().remove();

        if($('#recent li').length==0){
            $('#recent').append('<p>최근검색어가 없습니다.</p>');

        }else{
            $('#recent p').remove();
        }

    });


    // 카테고리 
    $('.category-nav > li').on('mouseenter',function(){

        $('.category-nav > li').removeClass('active');
        $(this).addClass('active');     

        $('.category-nav .wrap').hide();
        $(this).find('.wrap').stop().slideDown();   

    });    

    $('.category-nav').on('mouseleave',function(){

        $('.category-nav > li').removeClass('active');
        $('.category-nav .wrap').stop().slideUp();  

    });


    // 퀵메뉴 
    $('.quick-nav .tab-nav li a').click(function(e){

        e.preventDefault();

        var id=$(this).attr('href');

        $('.quick-nav .tab-nav li a').removeClass('on');
        $(this).addClass('on');

        $('.quick-nav .contents > div').hide();
        $(id).show();

        if($(this).attr('href')=='#wish'){  

            $(this).removeClass('sp-wish').addClass('sp-wishon');
            $(this).parent('li').prev('li').children('a').removeClass('sp-recenton').addClass('sp-recent');

        }else{

            $(this).removeClass('sp-recent').addClass('sp-recenton');
            $(this).parent('li').next('li').children('a').removeClass('sp-wishon').addClass('sp-wish');

        }

    });


    $('.quick-nav button:nth-of-type(2)').click(function(){

        if($(this).hasClass('sp-left')){

            $(this).removeClass('sp-left').addClass('sp-right');
            $('.quick-nav').css({right:0, transition:'0.3s'});

        }else{

            $(this).removeClass('sp-right').addClass('sp-left');
            $('.quick-nav').css({right:'-72px', transition:'0.3s'});

        }

    });

    $('.sp-top').click(function(){  

        $('html, body').stop(true).animate({
            scrollTop:0
        })

    });

    $('.quick-nav .contents span').each(function(){

        var long=$(this).text().length;

        if(long>=6){

            var short=$(this).text().substr(0,6)+"...";
            $(this).text(short);

        }

    });
        
    var quickPosition=$('.quick-nav').offset().top;

    $(window).scroll(function(){

        var scrollTop=$(this).scrollTop();

        $('.quick-nav').stop(true).animate({
            top:scrollTop+quickPosition
        },500)

        var noticeTop=$('.notice').offset().top-110;
        
        if(scrollTop>=noticeTop){
            $('.quick-nav').stop(true).animate({
                top:noticeTop+110
            })
        }

    });


    // footer 
    $('footer .wrap button').click(function(){
        $(this).next().fadeToggle();
    });


    // 슬라이드 
    var swiper1 = new Swiper('.swiper1', {

        pagination: {
            el: '.swiper1>.swiper-pagination',
            clickable:true
        },

        navigation: {
            nextEl: '.swiper1>.swiper-button-next',
            prevEl: '.swiper1>.swiper-button-prev',
        },

        effect:'fade',
        loop:true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

        on:{
            sliderMove:function(){
                $('#playStop i').removeClass('sp-stop').addClass('sp-play');
            }
        },

    });

    $('.swiper1 a').click(function(e){
        e.preventDefault();
    });

    $('.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet').click(function(){
        $('#playStop i').removeClass('sp-stop').addClass('sp-play');
    });

    $('#playStop').click(function(){

        if($(this).find('i').hasClass('sp-stop')){

            swiper1.autoplay.stop(); 
            $(this).find('i').removeClass('sp-stop').addClass('sp-play');

        }else{ //아이콘이 재생일때

            swiper1.autoplay.start(); 
            $(this).find('i').removeClass('sp-play').addClass('sp-stop');

        }
    });



    // 추천상품 슬라이드 
    var swiper2 = new Swiper('.swiper2', { 

        slidesPerView: 5,               
        navigation: {
            nextEl: '.product .swiper-button-next',
            prevEl: '.product .swiper-button-prev',
        },                
        loop:true

    });

    $('.product dl dt').each(function(){

        var long=$(this).text().length;

        if(long>=12){
            var short=$(this).text().substr(0,12)+"...";
            $(this).text(short);
        }

    });


    // 팝업 
    $('.product .slide .sp-hvcart').click(function(e){

        e.preventDefault();

        $('.pop-cart').addClass('on');
        $('.pop').after('<div class="popup-bg"></div>');

    });

    $('.product .slide .sp-hvwish').click(function(e){

        e.preventDefault();

        $('.pop-wish').addClass('on');
        $('.pop').after('<div class="popup-bg"></div>');

    });

    $('.pop button.sp-close').click(function(){

        $(this).parents('div').removeClass('on');
        $('.popup-bg').remove();

    });

    $('body').on('click','.popup-bg',function(){  

        $('.pop').removeClass('on');
        $('.popup-bg').remove();

    });


    // 공지 
    $('.notice .left .title').each(function(){

        var long=$(this).text().length;

        if(long>=30){

            var short=$(this).text().substr(0,30)+"...";

            $(this).text(short);
        }

    });
    
    
});
