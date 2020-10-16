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
  $('#sub2 ul li').click(function(){
    object.obj_index = $(this).index() - 1;
    var popup = $('.popup');
    $(popup).find('.sec2 > div > .title').text(object.title['title' + object.obj_index]);
    $(popup).find('.sec2 .right .name').text(object.name);
    $(popup).find('.sec2 .right .year').text(object.year['year' + object.obj_index]);
    $(popup).find('.sec2 .right .genre').text(object.genre['genre' + object.obj_index]);
    $(popup).find('.sec2 .right .material').text(object.material['material' + object.obj_index]);
    $(popup).find('.sec2 .right .size').text(object.size['size' + object.obj_index]);


  });

});

function myinfo(obj){
    var liWidth = obj.naturalWidth;
    var liHeight = obj.naturalHeight;
    if(liWidth > liHeight){
      obj.style.maxHeight = "auto";
      obj.style.maxWidth = "100%";
    }else{
      obj.style.maxHeight = "100%";
      obj.style.maxWidth = "auto";
    }
  }

function windowOpen(obj){
  var url = obj.getAttribute("src");
  window.open(url,'asdfo8or','scrollbars=yes,width=1600,height=960,top=10,left=150');
}
function windowOpen2(obj){
  var url2 = obj.previousSibling.previousSibling;
  console.log(url2);
  var url = url2.getAttribute("src");
  window.open(url,'asdfo8or','scrollbars=yes,width=1600,height=960,top=10,left=150');
}

function popupOpen(obj){
  var url = obj.getAttribute("src");
  document.querySelector('.popup .sec1 img').src = url;
  console.log(obj)
}

function subSetting(var_artist){
  console.log(var_artist);
}

function getPara(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
