


window.onload = function() {
	$(".bt-loading").fadeOut("1500", function () {
	$('#bt_loading').css("display", "none");
	});
};
$(window).scroll(function() {
	var height_header = $('#top').height() + $('header').height() + $('.boss-new-position').height()+10;			
	//var height_header_cate = $('#top').height() + $('header').height() + $('.boss_header').height() + $('#boss-menu-category .box-content').height();
	if($(window).scrollTop() > height_header) {
		$('.menu').addClass('boss_scroll');
		$('.boss_header').addClass('boss_scroll');
		$('.header_category').addClass('boss_scroll');
   } else {
		$('.boss_header').removeClass('boss_scroll');
		$('.menu').removeClass('boss_scroll');
		$('.header_category').removeClass('boss_scroll');
}
			
});

	jQuery(document).ready(function($) {
		loadtopmenu();
	});
	$("#boss-menu-category .boss_heading").click(function(){
		$('#boss-menu-category').toggleClass('opencate');
		loadtopmenu();
	});
	function loadtopmenu(){
		var menuheight = $('#boss-menu-category .box-content').outerHeight();
		var topcate = $('#boss-menu-category').offset().top;
		$('#boss-menu-category .boss-menu-cate .nav_title').each(function(index, element) {
			var liheight = $(this).outerHeight();
			var subheight = $(this).next('.nav_submenu').outerHeight();
			var topheight = $(this).offset().top - topcate -55;
		});
	}
	$('#boss-menu-category .b_menucategory_hidde,#boss-menu-category  .menu_loadmore_hidden').hide();
	$('#boss-menu-category .menu_loadmore').click(function(){
		$('#boss-menu-category .b_menucategory_hidde' ).slideToggle( "normal", function() {
			$('#boss-menu-category .menu_loadmore').hide();
			$('#boss-menu-category .menu_loadmore_hidden').show();
		});
		
	});
	$('#boss-menu-category .menu_loadmore_hidden').click(function(){
		$('#boss-menu-category .b_menucategory_hidde' ).slideToggle( "normal", function() {
			$('#boss-menu-category .menu_loadmore').show();
			$('#boss-menu-category .menu_loadmore_hidden').hide();
		});
		
	});
/**/
jQuery(document).ready(function() {		
	jQuery('.tp-banner0').show().revolution({
		dottedOverlay:"none",
		delay:5000,
		startWithSlide:0,
		startwidth:616,
		startheight:480,
		hideThumbs:0,
		hideTimerBar:"on",
		
		thumbWidth:0,
		thumbHeight:0,
		thumbAmount:0,
		
		navigationType:"none",
		navigationArrows:"solo",
		navigationStyle:"round", 
		
		touchenabled:"on",
		onHoverStop:"on",
		
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
								
		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
								
		keyboardNavigation:"off",
		
		navigationHAlign:"center",
		navigationVAlign:"bottom",
		navigationHOffset:40,
		navigationVOffset:40,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:0,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:0,
		soloArrowRightVOffset:0,
				
		shadow:0,
		fullWidth:"on",
		fullScreen:"off",

		spinner:"spinner4",
		
		stopLoop:"on",
		stopAfterLoops:-1,
		stopAtSlide:-1,

		shuffle:"off",
		
		autoHeight:"off",						
		forceFullWidth:"off",						
								
								
								
		hideThumbsOnMobile:"off",
		hideNavDelayOnMobile:1500,						
		hideBulletsOnMobile:"off",
		hideArrowsOnMobile:"off",
		hideThumbsUnderResolution:0,
		
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:767,
		videoJsPath:"rs-plugin/videojs/",
		fullScreenOffsetContainer: ""	
	});				
});	//ready
/**/





var myVar=setInterval(function(){Deal115()},1000);
function Deal115(){
	var i = 0;
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11500").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11501").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11502").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11503").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11504").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11505").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11510").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11511").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11512").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11513").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11514").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11515").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11520").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-05";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11521").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11530").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11531").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11532").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11533").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11534").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11535").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "2017-01-05";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11540").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11541").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11542").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11543").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11544").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11545").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
	}
function checkTime(j){
	if (j<10){
	  j="0" + j;
	}
	return j;
}
/**/
$(window).load(function(){
  
	initCarousel(1,116,0,3,376);
	
	
	$("a.head_tabs116").click(function() {
	
				
		if(!$(this).parent().hasClass('active')) {
		
			$(".head_tabs116").parent().removeClass("active");
			var $src_tab = $(this).attr("data-src");
			$($src_tab).parent().addClass("active");
			$(".content_tabs116").hide();
			var $selected_tab = $(this).attr("href");
			$($selected_tab).fadeIn();
			
					}
		return false;
	});

	$(window).resize(function() {
			});
});
/**/
var myVar=setInterval(function(){Deal116()},1000);
function Deal116(){
	var i = 0;
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11600").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11601").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11602").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11603").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11604").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11605").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11610").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11611").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11612").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11613").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11614").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11615").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11620").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11621").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11622").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11623").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11624").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11625").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11630").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-05";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11631").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "2017-01-05";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11640").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11641").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11642").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11643").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11644").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11645").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
	}
function checkTime(j){
	if (j<10){
	  j="0" + j;
	}
	return j;
}/**/
   $(window).load(function(){	
        $('#b_newsletter').modal('show');
		
    });
	 function validate () {
		var input = document.getElementById ("subscribe_checkbox");
		var isChecked = input.checked;
		if (isChecked){ document.cookie="b_newsletter=disable"; 
		}else{ 
			document.cookie="b_newsletter=;";
		}
	}
	/**/
	$('.boss-newsletter input.form-control').on('keydown', function(e) {
	if (e.keyCode == 13) {
		$('.boss-newsletter input.form-control').parent().find('a').trigger('click');
	}
});
$('.boss-newsletter-popup input.form-control').on('keydown', function(e) {
	if (e.keyCode == 13) {
		$('.boss-newsletter-popup input.form-control').parent().find('a').trigger('click');
	}
});
/**/

var myVar=setInterval(function(){Deal114()},1000);
function Deal114(){
	var i = 0;
			
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11400").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11401").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11402").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11403").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11404").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11405").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11410").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11411").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11412").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11413").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11414").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11415").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11420").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11421").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11422").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11423").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11424").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11425").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "2017-01-11";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11430").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "2017-01-05";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11431").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
			
		var today = new Date();
		
		var dateStr = "2017-01-05";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11440").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11441").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11442").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11443").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11444").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
		
		var today = new Date();
		
		var dateStr = "0000-00-00";
		//alert(dateStr);
		if (dateStr != "0000-00-00") {
		var date = dateStr.split("-");
		
		var date_end = new Date(date[0],(date[1]-1),date[2]);
		
		var deal = new Date();
		
		deal.setTime(date_end - today);
		
		//alert(deal);
		
		if(date_end >= today){
		
		var month = new Date(deal.getMonth(), deal.getMonth(), 0).getDate();
		
		
		var d = deal.getDate() + (month*deal.getMonth());
		var h = deal.getHours() + (d * 24);
		var m = deal.getMinutes();
		var s = deal.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		$(".datetime11445").html('<div class="sep"><i class="fa fa-clock-o" aria-hidden="true"></i> <span class="hou">111</span><span class="min">22</span><span class="sec">34</span></div>');
		}
		}
	}
function checkTime(j){
	if (j<10){
	  j="0" + j;
	}
	return j;
}
/**/
$(window).load(function(){
  
	initCarousel(1,115,0,3,376);
	
	
	$("a.head_tabs115").click(function() {
	
				
		if(!$(this).parent().hasClass('active')) {
		
			$(".head_tabs115").parent().removeClass("active");
			var $src_tab = $(this).attr("data-src");
			$($src_tab).parent().addClass("active");
			$(".content_tabs115").hide();
			var $selected_tab = $(this).attr("href");
			$($selected_tab).fadeIn();
			
					}
		return false;
	});

	$(window).resize(function() {
			});
});
/**/
$(window).load(function() {	
	boss_quick_shop();
	/*$('.display').bind('click', function() {
		$('.sft_quickshop_icon').remove();
		boss_quick_shop();
	});	*/
});

function boss_quick_shop(){	
		$('.product-thumb').each(function(index, value){		
			var id_product='';
			var reloadurl=false;
			
			if($(".image>a",this).attr('href')){
				
				var href_pro = $(".image>a",this).attr('href'); 
			}else{ 
				var href_pro = '';
			}
			if	(href_pro){
				var check=href_pro.match("index.php"); 
			}
			var last_index = '';
			var product_id = 0;
			if(check=="index.php"){	 //direct link
				var str = href_pro.split("&");
				for (var i=0;i<str.length;i++){
					if(str[i].match("product_id=") =="product_id="){					

						last_index = str[i];
						var id = last_index.split("=");
						product_id = id[1];
						break;
					}
				}
				reloadurl=true;
			}else{	//mode SEO
				var check_seo = href_pro.match("product_id=");
				if(check_seo=="product_id="){				

					var str = href_pro.split("&");
					for (var i=0; i<str.length; i++){
						if(str[i].match("product_id=") == "product_id="){
							var temp = str[i].split("?");
							last_index = temp[temp.length-1]; // lay phan tu cuoi cung
							var id = last_index.split("=");
							product_id = id[1];
							break;
						}
					}					
					reloadurl=true;
				}else{				
					var str_1 = href_pro.split("/");
					var str_2 = str_1[str_1.length-1]; 					
					var temp = str_2.split("?");
					last_index = temp[0];
					var id_index = '';
											if(last_index=="ipod-touch"){
							id_index = "product_id=32";
						}
											if(last_index=="samsung-galaxy-tab-10-1"){
							id_index = "product_id=49";
						}
											if(last_index=="macbook"){
							id_index = "product_id=43";
						}
											if(last_index=="imac"){
							id_index = "product_id=41";
						}
											if(last_index=="couple"){
							id_index = "product_id=50";
						}
											if(last_index=="ipod-shuffle"){
							id_index = "product_id=34";
						}
											if(last_index=="macbook-air"){
							id_index = "product_id=44";
						}
											if(last_index=="macbook-pro"){
							id_index = "product_id=45";
						}
											if(last_index=="hp-lp3065"){
							id_index = "product_id=47";
						}
											if(last_index=="htc-touch-hd"){
							id_index = "product_id=28";
						}
											if(last_index=="icream"){
							id_index = "product_id=51";
						}
											if(last_index=="product-8"){
							id_index = "product_id=35";
						}
											if(last_index=="ipod-nano"){
							id_index = "product_id=36";
						}
											if(last_index=="iphone"){
							id_index = "product_id=40";
						}
											if(last_index=="ipod-classic"){
							id_index = "product_id=48";
						}
											if(last_index=="sony-vaio"){
							id_index = "product_id=46";
						}
											if(last_index=="sea"){
							id_index = "product_id=52";
						}
											if(last_index=="food"){
							id_index = "product_id=53";
						}
											if(last_index=="palm-treo-pro"){
							id_index = "product_id=29";
						}
											if(last_index=="samsung-syncmaster-941bw"){
							id_index = "product_id=33";
						}
											if(last_index=="nikon-d300"){
							id_index = "product_id=31";
						}
											if(last_index=="test"){
							id_index = "product_id=42";
						}
											if(last_index=="canon-eos-5d"){
							id_index = "product_id=30";
						}
										if(id_index!=''){
						var id = id_index.split('=');
						product_id = id[1];	
						reloadurl=true;
					}
				}
			}
			
			if(reloadurl){		
				
				var _qsHref = '<button class=\"btn-quickshop\" title =\"Quick Shop\" onclick=\"getModalContent('+product_id+');\" class=\"sft_quickshop_icon \" data-toggle=\"modal\" data-target=\"#myModal\"><i class="fa fa-eye"></i></button>';			
				$('.button-group',this).append(_qsHref);					
				
				var quick_button = $('.btn-quickshop');								
				var width_button = (quick_button.width())/2 ;
				var height_button = (quick_button.height())/2;				
				var w_image = $('.image').width();
				var w_qs = quick_button.width();
				
		      		
					
			}
	   });
		$(' #product_related>li>div').each(function(index, value){		
			var id_product='';
			var reloadurl=false;
			
			if($(".image>a",this).attr('href')){
				
				var href_pro = $(".image>a",this).attr('href'); 
			}else{ 
				var href_pro = '';
			}
			if	(href_pro){
				var check=href_pro.match("index.php"); 
			}
			var last_index = '';
			var product_id = 0;
			if(check=="index.php"){	 //direct link
				var str = href_pro.split("&");
				for (var i=0;i<str.length;i++){
					if(str[i].match("product_id=") =="product_id="){					

						last_index = str[i];
						var id = last_index.split("=");
						product_id = id[1];
						break;
					}
				}
				reloadurl=true;
			}else{	//mode SEO
				var check_seo = href_pro.match("product_id=");
				if(check_seo=="product_id="){				

					var str = href_pro.split("&");
					for (var i=0; i<str.length; i++){
						if(str[i].match("product_id=") == "product_id="){
							var temp = str[i].split("?");
							last_index = temp[temp.length-1]; // lay phan tu cuoi cung
							var id = last_index.split("=");
							product_id = id[1];
							break;
						}
					}					
					reloadurl=true;
				}else{				
					var str_1 = href_pro.split("/");
					var str_2 = str_1[str_1.length-1]; 					
					var temp = str_2.split("?");
					last_index = temp[0];
					var id_index = '';
											if(last_index=="ipod-touch"){
							id_index = "product_id=32";
						}
											if(last_index=="samsung-galaxy-tab-10-1"){
							id_index = "product_id=49";
						}
											if(last_index=="macbook"){
							id_index = "product_id=43";
						}
											if(last_index=="imac"){
							id_index = "product_id=41";
						}
											if(last_index=="couple"){
							id_index = "product_id=50";
						}
											if(last_index=="ipod-shuffle"){
							id_index = "product_id=34";
						}
											if(last_index=="macbook-air"){
							id_index = "product_id=44";
						}
											if(last_index=="macbook-pro"){
							id_index = "product_id=45";
						}
											if(last_index=="hp-lp3065"){
							id_index = "product_id=47";
						}
											if(last_index=="htc-touch-hd"){
							id_index = "product_id=28";
						}
											if(last_index=="icream"){
							id_index = "product_id=51";
						}
											if(last_index=="product-8"){
							id_index = "product_id=35";
						}
											if(last_index=="ipod-nano"){
							id_index = "product_id=36";
						}
											if(last_index=="iphone"){
							id_index = "product_id=40";
						}
											if(last_index=="ipod-classic"){
							id_index = "product_id=48";
						}
											if(last_index=="sony-vaio"){
							id_index = "product_id=46";
						}
											if(last_index=="sea"){
							id_index = "product_id=52";
						}
											if(last_index=="food"){
							id_index = "product_id=53";
						}
											if(last_index=="palm-treo-pro"){
							id_index = "product_id=29";
						}
											if(last_index=="samsung-syncmaster-941bw"){
							id_index = "product_id=33";
						}
											if(last_index=="nikon-d300"){
							id_index = "product_id=31";
						}
											if(last_index=="test"){
							id_index = "product_id=42";
						}
											if(last_index=="canon-eos-5d"){
							id_index = "product_id=30";
						}
										if(id_index!=''){
						var id = id_index.split('=');
						product_id = id[1];	
						reloadurl=true;
					}
				}
			}
			
			if(reloadurl){		
				
				var _qsHref = '<button class=\"btn-quickshop\" title =\"Quick Shop\" onclick=\"getModalContent('+product_id+');\" class=\"sft_quickshop_icon \" data-toggle=\"modal\" data-target=\"#myModal\"><i class="fa fa-eye"></i></button>';			
				$('.button-group',this).append(_qsHref);					
				
				var quick_button = $('.btn-quickshop');								
				var width_button = (quick_button.width())/2 ;
				var height_button = (quick_button.height())/2;				
				var w_image = $('.image').width();
				var w_qs = quick_button.width();
				
		      		
					
			}
	   });
	var content_modal = '<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;"></div><div class="loading-qs" style="position:fixed;top:50%;left:50%"></div>';
	$('#bt_container').append(content_modal);
}

function getModalContent(product_id){		
	
	$.ajax({
		url: 'index.php?route=module/boss_quick_shop_product/&product_id=' + product_id,
		dataType: 'json',
		beforeSend: function() {			
			$('.loading-qs').html('<span class="wait">&nbsp;<img src="catalog/view/theme/default/image/loading.gif" alt="" /></span>');
			$('#myModal').html('');
		},		
		complete: function() {
			$('.wait').remove();
		},
		success: function(json) {			
			$('#myModal').html(json['html']);
			$('#myModal > .modal-dialog').css({
				'width': '95%',
				'max-width': '900px',
			});
		}
	});
}

/**/
	$(function() {
        $(".bt_fixed_scroll li").click(function(e) {
            e.preventDefault();
            var flrIdx = $(this).attr("data-cate-id");
            $("html, body").animate({ scrollTop: $("[id='" + flrIdx + "']").offset().top-55});
        });

        if (typeof homePage !== "undefined") {
            homePage.UpdateFloorJumpingDiv();
        }
    });
    /**/
    $(window).load(function(){
  
	initCarousel(1,114,0,3,376);
	
	
	$("a.head_tabs114").click(function() {
	
				
		if(!$(this).parent().hasClass('active')) {
		
			$(".head_tabs114").parent().removeClass("active");
			var $src_tab = $(this).attr("data-src");
			$($src_tab).parent().addClass("active");
			$(".content_tabs114").hide();
			var $selected_tab = $(this).attr("href");
			$($selected_tab).fadeIn();
			
					}
		return false;
	});

	$(window).resize(function() {
			});
});
    /***/