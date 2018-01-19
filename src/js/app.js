/*Needed steps: 
- User clicks a given card  
- load content based on url and save into variable
- 

*/

$(document).ready(function () {});

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
