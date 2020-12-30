$(document).ready(function () {
  $('body').materialScrollTop();
  new WOW().init();
  $(function(){
    $('#menu').slicknav({
        'prependTo': 'nav',
    });
});
});