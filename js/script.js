$(document).ready(function() {
	// back to top
  $('#btn-top').click(function(event) {
  console.log('click');
  $('html , body').animate({scrollTop: 0}, 700,'easeOutSine');
  });
  $('#btn-top2').click(function(event) {
  console.log('click');
  $('html , body').animate({scrollTop: 0}, 700,'easeOutSine');
  });
  // end back to top
   $('#btn-next').click(function(event) {
      var slide_sau = $('.active').next();
      if(slide_sau.length!=0){
         $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
         });
         slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
         });
      }else{
         $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
         });
         $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
         });
      }
   });
   $('#btn-prev').click(function(event) {
      var slide_sau = $('.active').next();
      if(slide_sau.length!=0){
         $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
         });
         slide_sau.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
         });
      }else{
         $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
         });
         $('.slide:first-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
         });
      }
   });
});