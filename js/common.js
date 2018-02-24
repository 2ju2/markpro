/***** Common JS *****/

$(document).ready(function() {
	
	var header_markup = '<nav>\n\
	<a href="/markpro/main/index.html" class="header_logo">\n\
	<img alt="markpro" src="/markpro/img/common/logo.png">\n\
	</a>\n\
	<div class="pc_nav_back"></div>\n\
	<ul class="pc_menu">\n\
	<li>\n\
	<a href="#">회사소개</a>\n\
	<ul class="subDepth">\n\
	<li><a href="/markpro/templet/temp1.html" style="text-decoration:underline;">Overview</a></li>\n\
	<li><a href="/markpro/templet/temp2.html" style="text-decoration:underline;">CEO Message</a></li>\n\
	<li><a href="#">History</a></li>\n\
	<li><a href="/markpro/templet/temp4.html" style="text-decoration:underline;">오시는길</a></li>\n\
	</ul>\n\
	</li>\n\
	<li>\n\
	<a href="#">사업영역</a>\n\
	<ul class="subDepth">\n\
	<li><a href="#">특허관리부</a></li>\n\
	<li><a href="#">브랜드사업부</a></li>\n\
	<li><a href="#">기술거래부</a></li>\n\
	<li><a href="#">IT개발부</a></li>\n\
	</ul>\n\
	</li>\n\
	<li>\n\
	<a href="#">서비스&amp;제품</a>\n\
	<ul class="subDepth">\n\
	<li><a href="/markpro/templet/temp3.html" style="text-decoration:underline;">연차료 관리</a></li>\n\
	<li><a href="#">IT SERVICE</a></li>\n\
	<li><a href="#">MP Direct</a></li>\n\
	<li><a href="#">MarkSearch</a></li>\n\
	</ul>\n\
	</li>\n\
	<li>\n\
	<a href="#">News</a>\n\
	<ul class="subDepth">\n\
	<li><a href="/markpro/templet/temp6.html" style="text-decoration:underline;">News</a></li>\n\
	<li><a href="/markpro/templet/temp5.html" style="text-decoration:underline;">Event</a></li>\n\
	<li><a href="#">수상</a></li>\n\
	</ul>\n\
	</li>\n\
	</ul>\n\
	<ul class="menu_right">\n\
	<li class="dropdown">\n\
	<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">language <span class="caret"></span></a>\n\
	<ul class="dropdown-menu" role="menu">\n\
	<li><a href="#">KOREAN</a></li>\n\
	<li><a href="#">ENGLISH</a></li>\n\
	<li><a href="#">JAPANESE</a></li>\n\
	<li><a href="#">CHINSESE</a></li>\n\
	</ul>\n\
	</li>\n\
	<li><a class="mb_menu_btn" href="#"><span class="glyphicon glyphicon-align-justify"></span></a></li>\n\
	</ul>\n\
	<div class="mobile_wrap">\n\
	<ul class="accordion">\n\
	<li>\n\
	<a class="toggle">회사소개<span></span></a>\n\
	<ul class="depth_2 inner">\n\
	<li><a class="toggle" href="/markpro/templet/temp1.html" style="text-decoration:underline;">Overview</a>\n\
	</li>\n\
	<li><a class="toggle" href="/markpro/templet/temp2.html" style="text-decoration:underline;">CEO Message</a>\n\
	</li>\n\
	<li><a class="toggle">History</a>\n\
	</li>\n\
	<li><a class="toggle" href="/markpro/templet/temp4.html" style="text-decoration:underline;">오시는길</a>\n\
	</li>\n\
	</ul>\n\
	</li>\n\
	<li>\n\
	<a class="toggle">사업영역<span></span></a>\n\
	<ul class="depth_2 inner">\n\
	<li><a class="toggle">특허관리부</a>\n\
	</li>\n\
	<li><a class="toggle">브랜드사업부</a>\n\
	</li>\n\
	<li><a class="toggle">기술거래부</a>\n\
	</li>\n\
	<li><a class="toggle">IT개발부</a>\n\
	</li>\n\
	</ul>\n\
	</li>\n\
	<li>\n\
	<a class="toggle">서비스&제품<span></span></a>\n\
	<ul class="depth_2 inner">\n\
	<li><a class="toggle" href="/markpro/templet/temp3.html" style="text-decoration:underline;">연차료 관리</a>\n\
	</li>\n\
	<li><a class="toggle">IT SERVICE</a>\n\
	</li>\n\
	<li><a class="toggle">MP Direct</a>\n\
	</li>\n\
	<li><a class="toggle">MarkSearch<span></span></a>\n\
	<ul class="depth_3 inner">\n\
	<li><a class="toggle">문자상표 검색</a></li>\n\
	<li><a class="toggle">도형상표 검색</a></li>\n\
	</ul>\n\
	</li>\n\
	</ul>\n\
	</li>\n\
	<li>\n\
	<a class="toggle">News<span></span></a>\n\
	<ul class="depth_2 inner">\n\
	<li><a class="toggle" href="/markpro/templet/temp6.html" style="text-decoration:underline;">News</a>\n\
	</li>\n\
	<li><a class="toggle" href="/markpro/templet/temp5.html" style="text-decoration:underline;">Event</a>\n\
	</li>\n\
	<li><a class="toggle">수상</a>\n\
	</li>\n\
	</ul>\n\
	</li>\n\
	</ul>\n\
	</li>\n\
	</ul>\n\
	</div>\n\
	</nav>';
	$('#commonHeader').append(header_markup);
	
	var footer_markup = '<div class="container footer">\n\
		<p class="pull-right"><a href="#firstPage">▲Top</a></p>\n\
		<p>© 2014 Company, Inc. · <a href="#none">Privacy</a> · <a href="#none">Terms</a></p>\n\
	</div>';
	$('#commonFooter').append(footer_markup);


	//pc Menu dropdown
	onPcMenu();

	//mobile menu
	onMobileMenu();

	//animateNum
	animateNum();

});

$(window).resize(function(){
	if($(window).width() > 768){ //PC
		onMobileWidth(); //모바일 메뉴닫기
	}else{	//모바일

	}
});

function onPcMenu(){
	var $pc_menu = $(".pc_menu"),
	$pc_menu_li = $(".pc_menu > li"),
	$pc_subDepth = $(".pc_menu > li > ul")
	$pc_navBack = $(".pc_nav_back");

	$pc_menu_li.each(function(index){
		 $(this).on({
			 'mouseenter focusin': navi_onOver,
			 'mouseleave focusout': navi_onOut
		 });
	});

	//open
	function navi_onOver(){
		$pc_menu.addClass('on');
		$(this).addClass('on');
		$pc_navBack.removeClass('on'); //reset		
		$pc_navBack.addClass('on');	
	};
	//close
	function navi_onOut(){
		$pc_menu.removeClass('on');
		$(this).removeClass('on');
		$pc_navBack.removeClass('on');
	};
}

function onMobileMenu(){
	var $mb_opener  = $(".mb_menu_btn")
		$mb_wrap = $(".mobile_wrap");

	//좌우 open
	$mb_opener.on('click', function(){
		$mb_wrap.toggleClass('open');
		if($mb_wrap.hasClass('open') == false){
			$mb_opener.find('span').removeClass('glyphicon-remove').addClass('glyphicon-align-justify');
			$mb_wrap.stop().animate({'left' : '-100%'}, 300);
			$mb_wrap.find('.toggle').removeClass('on');
			$mb_wrap.find('.inner').delay(300).removeClass('active').slideUp(300);
		}else{
			$mb_opener.find('span').removeClass('glyphicon-align-justify').addClass('glyphicon-remove');			
			$mb_wrap.stop().animate({'left' : '-50px'}, 300);			
		}
	});

	//세로 open	
	$('.toggle').click(function(e) {
		//e.preventDefault();
		var $this = $(this);
	
		if ($this.next().hasClass('active')) { //클릭한 a의 하위메뉴 ul에 active가 있는경우
			$this.removeClass("on");
			$this.next().removeClass('active').slideUp(300);
		} else { 								//클릭한 a의 하위메뉴 ul에 active가 없는경우
			$this.parent().parent().find('li .inner').removeClass('active').slideUp(300); 
			$this.parent().parent().find('a').removeClass('on'); 
			$this.parent().parent().prev('.depth_2 a').removeClass('on'); 
			$this.addClass("on");
			$this.next().toggleClass('active').slideToggle(300); 
		}
		});

}

//숫자 카운팅 + 1000단위 콤마
function animateNum(){
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			step: function (now) {
				$(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			}
		});
	});
}

function onMobileWidth(){
	$(".mobile_wrap").addClass('open');
	$(".mb_menu_btn").trigger('click');
};




