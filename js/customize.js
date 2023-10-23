// 自行加入的JS請寫在這裡
$(function () {

  // 項目輪播
  $('.infoSlider').slick({
    mobileFirst: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  // 項目切換 .act
  $('.events .col:first').addClass('act');
  $('.info_area .stack:first').addClass('act');

  $('.events .col:nth-child(N)').on('click', function() {
    var index = $(this).index();

    $('.events .col').removeClass('act');
    $('.info_area .stack').removeClass('act');

    $(this).addClass('act');
    // 選擇.info_area內的第N個.infoSlider並新增.act
    $('.info_area .stack:nth-child(' + (index + 1) + ')').addClass('act');
  });

  // 主選單開關
  $('.sidebarCtrl').click(function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.header').removeClass('show');
      
    } else {
      $(this).addClass('open');
      $('.header').addClass('show');
    }
  }); 

  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
  // 首頁輪播
  // $('.mpSlider').slick({
  //   mobileFirst: true,
  //   dots: true,
  //   arrows: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   infinite: false,
  //   autoplay: false,
  //   fade: true,
  //   ease: 'ease',
  //   pauseOnHover: false,
  //   pauseOnFocus: false,
  //   responsive: [{
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       arrows: true
  //     }
  //   },{
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       arrows: true
  //     }
  //   }
  //   ]
  // });

  // //燈箱slick+lightBox組合
  // $('.cp_slider').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 1500,
  //   pauseOnHover: true,
  //   pauseOnFocus: true,
  //   focusOnSelect: true,
  //   accessibility: true,
  //   lazyLoad: 'ondemand',
  //   ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 545,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });
  // //
  // $('.cppic_slider').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 1500,
  //   // pauseOnHover: true,
  //   // pauseOnFocus: true,
  //   // focusOnSelect: true,
  //   // accessibility: true,
  //   // lazyLoad: 'ondemand',
  //   // ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 545,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });
  // // cp_photo
  // $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $('.controls').html(i + '/' + slick.slideCount);
  // });
  // $('.Slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   swipe: false,
  //   swipeToSlide: false,
  //   lazyLoad: 'ondemand',
  //   asNavFor: '.Slider-nav',
  //   infinite: true,
  // });
  // $('.Slider-nav').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   asNavFor: '.Slider-for',
  //   dots: true,
  //   arrows: true,
  //   lazyLoad: 'ondemand',
  //   focusOnSelect: true,
  //   infinite: true,
  // });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
});
