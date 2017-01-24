$(function () {
	$("#boss_filter_search").selectbox();
});
var status = 1;
var image = 1;
var price = 1;
var limit = 5;
if (status == 1) {
	var category_id = 0;
	$("#boss_filter_search").on('change', function() {
		category_id = $(this).val();
	});
	$('input[name=\'search\']').autocomplete({
		source: function (request, response) {
			$.ajax({
				url: 'index.php?route=module/boss_search_autocomplete&limit=' + limit + '&filter_name=' + encodeURIComponent(request)+ '&category_id=' + category_id,
				dataType: 'json',
				success: function (json) {
					response($.map(json, function (item) {
						return {
							label: item['name'],
							value: item['product_id'],
							price: item['price'],
							special: item['special'],
							href: item['href'],
							image: item['image']
						}
					}));
				}
			});
		},
	});
}
/***/
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
			/*if((subheight < menuheight)&&(subheight < topheight)){
				var bottomh = topheight - subheight + liheight + 14;
				$(this).next('.nav_submenu').css('top', bottomh + 'px');
			}else{
				$(this).next('.nav_submenu').css('top', '-1px');
			}*/
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

	/***/
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
					var temp = str_2.spl</str");
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
</str							if(last_index=="sony-vaio"){
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
					var temp = str_2.s</str"?");
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
					</str	if(last_index=="sony-vaio"){
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
/***/
(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=1679538022274729";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
/****/
$('.bt-image-option').click(function(){
	$('.bt-image-option').each(function(){
		$(this).removeClass('active');
	});
	$(this).addClass('active');
});
function changeQty(increase) {
    var qty = parseInt($('.select_number').find("input").val());
    if ( !isNaN(qty) ) {
        qty = increase ? qty+1 : (qty > 1 ? qty-1 : 1);
        $('.select_number').find("input").val(qty);
    }else{
		$('.select_number').find("input").val(1);
	}
}
$(window).load(function(){
	
	$('#product_related').carouFredSel({
        auto: false,
        responsive: true,
        width: '100%',
        prev: '#prev_related',
        next: '#next_related',
        swipe: {
        onTouch : false
        },
        items: {
            width: 370,
			height: 470,
            visible: {
            min: 1,
            max: 3
            }
        },
        scroll: {
            direction : 'left',    //  The direction of the transition.
            duration  : 1000   //  The duration of the transition.
        }
	});
	$('#boss-image-additional').carouFredSel({
        auto: false,
        responsive: true,
        width: '100%',
        prev: '#prev_image_additional',
        next: '#next_image_additional',
        swipe: {
        onTouch : true
        },
        items: {
            width: 120,
            height: 'auto',
            visible: {
            min: 1,
            max: 3
            }
        },
        scroll: {
            direction : 'left',    //  The direction of the transition.
            duration  : 500,   //  The duration of the transition.
        }
    });
});
/***/
$('select[name=\'recurring_id\'], input[name="quantity"]').change(function(){
	$.ajax({
		url: 'index.php?route=product/product/getRecurringDescription',
		type: 'post',
		data: $('input[name=\'product_id\'], input[name=\'quantity\'], select[name=\'recurring_id\']'),
		dataType: 'json',
		beforeSend: function() {
			$('#recurring-description').html('');
		},
		success: function(json) {
			$('.alert, .text-danger').remove();
			
			if (json['success']) {
				$('#recurring-description').html(json['success']);
			}
		}
	});
});
/***/
$('.date').datetimepicker({
	pickTime: false
});

$('.datetime').datetimepicker({
	pickDate: true,
	pickTime: true
});

$('.time').datetimepicker({
	pickDate: false
});

$('button[id^=\'button-upload\']').on('click', function() {
	var node = this;
	
	$('#form-upload').remove();
	
	$('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');
	
	$('#form-upload input[name=\'file\']').trigger('click');

	if (typeof timer != 'undefined') {
    	clearInterval(timer);
	}

	timer = setInterval(function() {
		if ($('#form-upload input[name=\'file\']').val() != '') {
			clearInterval(timer);
			
			$.ajax({
				url: 'index.php?route=tool/upload',
				type: 'post',
				dataType: 'json',
				data: new FormData($('#form-upload')[0]),
				cache: false,
				contentType: false,
				processData: false,
				beforeSend: function() {
					$(node).button('loading');
				},
				complete: function() {
					$(node).button('reset');
				},
				success: function(json) {
					$('.text-danger').remove();
					
					if (json['error']) {
						$(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
					}
					
					if (json['success']) {
						alert(json['success']);
						
						$(node).parent().find('input').attr('value', json['code']);
					}
				},
				error: function(xhr, ajaxOptions, thrownError) {
					alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
				}
			});
		}
	}, 500);
});
/***/
$('#review').delegate('.pagination a', 'click', function(e) {
  e.preventDefault();

    $('#review').fadeOut('slow');

    $('#review').load(this.href);

    $('#review').fadeIn('slow');
});

$('#review').load('index.php?route=product/product/review&product_id=51');

$('#button-review').on('click', function() {
	$.ajax({
		url: 'index.php?route=product/product/write&product_id=51',
		type: 'post',
		dataType: 'json',
		data: $("#form-review").serialize(),
		beforeSend: function() {
			$('#button-review').button('loading');
		},
		complete: function() {
			$('#button-review').button('reset');
		},
		success: function(json) {
			$('.alert-success, .alert-danger').remove();
			
			if (json['error']) {
				$('#review').after('<div</divs="alert alert-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
			}
			
			if (json['success']) {
				$('#review').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '</div>');
				
				$('input[name=\'name\']').val('');
				$('textarea[name=\'text\']').val('');
				$('input[name=\'rating\']:checked').prop('checked', false);
			}
		}
	});
});

$(document).ready(function() {
	$('.thumbnails').magnificPopup({
		type:'image',
		delegate: 'a',
		gallery: {
			enabled:true
		}
	});
});
function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');   
}
/***/
$(document).ready(function(){
    $('input:checked').parent().addClass("active");
    $('input').click(function () {
        $('input:not(:checked)').parent().removeClass("active");
        $('input:checked').parent().addClass("active");
    });

});

function email_subscribe(module_id,id){ 
	$.ajax({
			type: 'post',
			url: 'index.php?route=module/newslettersubscribe/subscribe&module_id='+module_id,
			dataType: 'json',
            data:$(id+" #subscribe"+module_id).serialize(),
			beforeSend: function() {
			$('.success, .warning').remove();
				//$(id+' #b_button_subscribe'+module_id).button('loading');
			},		
			success: function(json) {
				$(id+' #b_button_subscribe'+module_id).button('reset');
				if (json['error']) {
					$(id+' #subscribe_result'+module_id).html('<span class="error">' + json['error'] + '</span>');
					$(id+' #popup_subscribe_result'+module_id).html('<span class="error">' + json['error'] + '</span>');
				}
				
				if (json['success']) {					
					$(id+' #subscribe'+module_id)[0].reset();
					$(id+' #subscribe_result'+module_id).html('<span class="success">' + json['success'] + '</span>');
					$(id+' #popup_subscribe_result'+module_id).html('<span class="success">' + json['success'] + '</span>');
				}
			}			
	}); 
}
function email_unsubscribe(module_id,id){
	$.ajax({
			type: 'post',
			url: 'index.php?route=module/newslettersubscribe/unsubscribe&module_id='+module_id,
			dataType: 'json',
            data:$(id+" #subscribe"+module_id).serialize(),
			beforeSend: function() {
			$('.success, .warning').remove();
				$(id+' #subscribe'+module_id)[0].reset();			
			},		
			success: function(json) {
				if (json['error']) {
					$(id+' #subscribe_result'+module_id).html('<span class="error">' + json['error'] + '</span>');
					$(id+' #popup_subscribe_result'+module_id).html('<span class="error">' + json['error'] + '</span>');
				}
				
				if (json['success']) {
					$(id+' #subscribe_result'+module_id).html('<span class="success">' + json['success'] + '</span>');
					$(id+' #popup_subscribe_result'+module_id).html('<span class="success">' + json['success'] + '</span>');
				}
			}	
	}); 
}
/***/
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
      $(function(){
			$(window).scroll(function(){
				if($(this).scrollTop()>600){
				  $('#back_top').fadeIn();
				}
				else{
				  $('#back_top').fadeOut();
				}
			});
			$("#back_top").click(function (e) {
				e.preventDefault();
				$('body,html').animate({scrollTop:0},800,'swing');
			});
        });