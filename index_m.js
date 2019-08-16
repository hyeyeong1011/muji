// 슬라이드 =======================================
$(function(){
    var swiper1 = new Swiper('.swiper1', {
        pagination: {
            el: '.swiper1>.swiper-pagination',
            clickable:true
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
    })


    $('#playStop').click(function(){
    if($(this).find('i').hasClass('sp-stop')){
        swiper1.autoplay.stop(); 
        $(this).find('i').removeClass('sp-stop').addClass('sp-play');
    }else{ //아이콘이 재생일때
        swiper1.autoplay.start(); 
        $(this).find('i').removeClass('sp-play').addClass('sp-stop');
    }
    })



    // 추천상품 ===============================================
    // $('.product .wrap dt').each(function(){
    //     var long=$(this).text().length;
    //     // console.log(long);
        
    //     if(long>=13){
    //         var short=$(this).text().substr(0,13)+"...";
    //         $(this).text(short);
    //     }
    // })

    $('.product li').slice(0,6).show(); 
            
    $('.product>button').click(function(){
        if($(this).text()=='접기'){//접기
            $('.product li').hide().slice(0,6).show();
            $(this).text('더보기');
        }else{//더보기
            $('.product li:hidden').slice(0,6).slideDown();
            if($('.product li:hidden').length==0){
                $(this).text('접기');
            }
        }
    })

    // 서비스 슬라이드 =========================================
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper2>.swiper-pagination',
            clickable:true
        },
        loop:true
    });

    $('.swiper2 a').click(function(e){
        e.preventDefault();
    })

    // 공지 =============================================
    $(function(){     
        function move(){
            $('.notice1 ul li').first().slideUp(function(){
                $(this).appendTo('.notice1 ul').show();
            });
        }
        var play=setInterval(move,2000);
    })

    // 위로가기 =========================================
    // 위로가기 버튼을 일정 스크롤이 진행되면 보여주기
    $(function(){
        $(window).scroll(function(){
            var scrollTop=$(this).scrollTop();
            console.log(scrollTop);
            if(scrollTop>200){
                $('#goTop').addClass('on');
            }else{
                $('#goTop').removeClass('on');
            }
        })
    
        //위로가기 버튼을 누르면 가장 상위로 스크롤 이동 
        $('#goTop').click(function(){   
            var scrollTop=$(this).scrollTop();                                            
            $('html, body').stop(true).animate({
                scrollTop:0
            })
        })
    })


    // footer ========================================
    $('footer>button').click(function(){
        $(this).next().fadeToggle();
        $('footer>button span').toggleClass('active');
    })


    // 전체메뉴
    $('.category-nav > li > a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp();
        }else{
            $('.category-nav a').removeClass();
            $('.category-nav ul').slideUp();
            $(this).addClass('active');
            $(this).next().slideDown();
        }
    })

    $('.sp-menu').click(function(){
        $('.menu').addClass('open');
    })
    $('.menuTop button').click(function(){
        $('.menu').removeClass('open');
        $('.pop-search').removeClass('open');
        $('.category-nav a').removeClass();
        $('.category-nav ul').slideUp();
        $('.pop-search input').val('');
    })

    //  검색창 팝업
    $('.sp-search').click(function(){
        $('.pop-search').addClass('open');
    })

    $('.pop-search .tab-nav li').click(function(e){
        e.preventDefault();
        var id=$(this).children('a').attr('href');
        $('.pop-search .tab-nav li').removeClass('active');
        $(this).addClass('active');
        $('.pop-search .contents div#now, .pop-search .contents div#recent').hide();
        $(id).show();
    });

    $('.pop-search .contents div a').click(function(e){
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




})