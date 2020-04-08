// JavaScript Document

$(document).ready(function(){
  $('div').mouseover(function(){
    $(this).addClass($(this).data('class')+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass()
    });
  })
})

