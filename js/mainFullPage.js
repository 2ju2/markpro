/***** Common JS *****/

$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#c8c8c8', '#aebac0', '#3c3c3c'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		'navigation': true,
		//'navigationPosition': 'right',
		/*afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 1000);
        },
		*/
		scrollingSpeed: 1000,
        slidesNavigation: true, //horizontal dots
        scrollOverflow: true,
	});

	/*

	$('#fullpage').fullpage({
    //Navigation
    menu: true,
    anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide', 'sixthSlide', 'seventhSlide'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide', 'sixthSlide', 'seventhSlide'],

    //Scrolling
    css3: true,
    scrollingSpeed: 300,
    autoScrolling: true,
    easing: 'easeInQuart',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Design
    verticalCentered: true,
    resize: false,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '4em',
    responsive: 0,

    //Events
    onLeave: function(anchorLink, index){
        if(index == 1,2,3,4,5,6){
            $("footer").slideUp(250);
        }
    },
    afterLoad: function(anchorLink, index){
        if(index == 7){
            $(".section").length && $("footer").slideDown(500);
        }

        var activeSection = $('.section').eq(index -1);
        activeSection.find('img').each(function() {
            var imagePath = $(this).attr("data-original");
            $(this).attr('src',imagePath);
        });
    },
    afterRender: function(){
        var activeSection = $('.section').eq(0);;
        activeSection.find('img').each(function() {
            var imagePath = $(this).attr("data-original");
            $(this).attr('src',imagePath);
        });
    }            
});
	*/

});



