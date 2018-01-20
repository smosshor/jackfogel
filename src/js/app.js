$(document).ready(function () {

});

$(window).on('load', function () { // makes sure the whole site is loaded 
	$('#status').fadeOut(); // will first fade out the loading animation 
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
	$('body').delay(350).css({
		'overflow': 'visible'
	});
})


$(document).scroll(function () {
	var scrollPosition = $(window).scrollTop();
	if (scrollPosition >= 1400) {
		$('.card-description a h1').text('breathe');
		$('#breathe').addClass('active');
		$('#pavilion').removeClass('active');

	} else if (scrollPosition > 600 && scrollPosition <= 1400) {
		$('.card-description a h1').text('pavilion');
		$('#pavilion').addClass('active');
		$('#darkroom').removeClass('active');
		$('#breathe').removeClass('active');

	} else if (scrollPosition <= 600) {
		$('.card-description a h1').text('darkroom');
		$('#darkroom').addClass('active');
		$('#pavilion').removeClass('active');
	}
});




/*Function to control clicking on a card
    $('#cards a').click(function () {
        e.preventDefault();
        
        url(/Users/Sarah/Documents/GitHub/portfolio_2018/src/img/bg2.jpg)

        // save content to load into a variable -- #content-- 
        var toLoad = $(this).attr('href') + '#content';
        loadContent(toLoad);

        //Load content, contains showNewContent
        function loadContent() {
            $('#contentSection').load(toLoad);
        }
    });
    // Function to control clicking OUT of a card

    $('#itemx a').click(function () {
        //hide the content on the currrent page 
        $('#content').hide('fast', loadContent);
    });
    */
