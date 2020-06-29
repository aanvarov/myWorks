$(function() {

    $(document).on('scroll', function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop >=  30) {
			$('.active').removeClass('active');
			if (scrollTop >= $('#works').offset().top - 110) {
				$('#worksLink').addClass('active');
			} else
			if (scrollTop >= $('#history').offset().top - 80) {
				$('#historyLink').addClass('active');
			}
			$('.navWrapper').css({backgroundColor: '#171a1a'});
		} else {
            $('#historyLink').removeClass('active');
			$('.navWrapper').css({backgroundColor: 'transparent'});
		}
	})

    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('show')
    })


    // logo hover func
    $('.logo').mouseover(function(){
        console.log('over'),
        $('.logo').addClass('logohover')
    })
    $('.logo').mouseleave(function(){
        console.log('leave')
        $('.logo').removeClass('logohover')
    })

    // slider 
    $('.slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: "<img id='prev' class='slick-prev' src='./img/angle-left.png'>",
        nextArrow: "<img id='next' class='slick-next' src='./img/angle-left.png'>"
    })

    $('.panel-title a').click(function(){
        console.log('clicked')
        $('.panel-heading').toggleClass('bg')
    })

    if($('.panel-collapse').hasClass('show')){
        console.log('showed')
        $('.panel-heading').addClass('bg')
    } else {
        $('.panel-heading').removeClass('bg')
    }





    console.log('ready')
  });
