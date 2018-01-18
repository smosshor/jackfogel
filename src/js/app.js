/*Needed steps: 
- User clicks a given card  
- load content based on url and save into variable
- 

*/

$(document).ready(function () {});

$(document).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 1000) {
        $('.card-description a h2').text('breathe');

    } else if (scrollPosition > 500 && scrollPosition <= 1000) {
        $('.card-description a h2').text('pavillion');

    } else if (scrollPosition <= 500) {
        $('.card-description a h2').text('darkroom');
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
