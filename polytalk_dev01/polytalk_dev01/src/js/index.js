$('.m_menu_area').on('click', function () {
  $('.mobile_gnb').stop().animate({ left: '0px' }, 300)
})

$('.btn_close').on('click', function () {
  $('.mobile_gnb').stop().animate({ left: '-100%' }, 300)
})

$('div.tit').on('click', function () {
  if ($(this).hasClass('on') == false) {
    $('div.tit').removeClass('on')
    $(this).addClass('on')
    $('.gnb_list .sub').stop().slideUp(200)
    $(this).next('.gnb_list .sub').stop().slideDown(200)
  }
  else {
    $('div.tit').removeClass('on')
    $('.gnb_list .sub').stop().slideUp(200)
  }
})