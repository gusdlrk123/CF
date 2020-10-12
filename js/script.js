$(document).ready(function(){
  // sub_menu active
  $('.sub_menu li a').click(function(){
    $('.sub_menu li a').removeClass('active');
    $(this).addClass('active');

    let $sub = $('.sub');
    let attr = $(this).attr('href');

    $sub.find('.sub_contents').removeClass('active');
    $sub.find(attr).addClass('active');
  })

  $('.artworkbox .imgbox img').click(function(){
    $('.popup').addClass("active");
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('#element').on('scroll touchmove mousewheel', function(event){
      event.preventDefault();
      event.stopPropagation();
      return false;
    });

      $('.pop_header > img').click(function(){
        $('.popup').removeClass("active");
        $('html, body').css({'overflow': 'auto', 'height': '100%'});
        $('#element').off('scroll touchmove mousewheel');
      })
  })

});

function myinfo(obj){
    var liWidth = obj.naturalWidth;
    var liHeight = obj.naturalHeight;
    if(liWidth > liHeight){
      obj.style.height = "auto";
      obj.style.width = "100%";
    }else{
      obj.style.height = "100%";
      obj.style.width = "auto";
    }
  }

function windowOpen(obj){
  var url = obj.getAttribute("src");
  console.log(url);
  window.open(url,'asdfo8or','scrollbars=yes,width=1600,height=960,top=10,left=150');
}

function popupOpen(obj){

}
