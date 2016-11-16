// JavaScript Document
jQuery(function($) {
	"use strict";
	/*BEGIN WOW*/
	new WOW().init();
	/*END WOW*/
	/*BEGIN FORM STYLER*/
	jQuery('.styled').styler();
	/*END FORM STYLER*/
	/*BEGIN */
	jQuery('#product-reviews').on("click", function() {						   
		var $this = jQuery(this),
			$taber = jQuery('.product-taber'),
			$taberHead = $taber.find('.product-taber__head'),
			$taberHeadItem = $taberHead.find('li'),
			$tab = $taber.find('.pt-tab');
		$taberHeadItem.removeClass('active').siblings().last().addClass('active');
		$tab.css('display','none').siblings().last().css('display','block');
		jQuery('html, body').stop(true,true).animate({
			scrollTop: $taber.offset().top
		}, 1000);
		return false
	});
	/*END FORM STYLER*/
	/*BEGIN HEADER CURRENCY */
	var $pluginCurrency = jQuery("#plugin-currency"),
		$pluginCurrencyItem = $pluginCurrency.find('.header-top__currency__item');
	$pluginCurrencyItem.on("click touchstart", function() {
		$(this).addClass('active').siblings().removeClass('active');
		return false
	});
	/*END HEADER CURRENCY */
	/*BEGIN voucher */
	var $yourCartOptions = jQuery("#your-cart-options"),
		$yourCartOptions_row = $yourCartOptions.find('.yc-options__row'),
		$yourCartOptions_head = $yourCartOptions_row.find('.yc-options__visible');
	$yourCartOptions_head.on("click touchstart", function() {
		var $this =  $(this),
			$row = $this.closest('.yc-options__row'),
			$hide = $row.find('.yc-options__hide');
		$hide.stop(true,true).slideToggle(300);
		$this.toggleClass('open');
		return false
	});
	/*END voucher */
	/*BEGIN validate */
	$("#form").validate({
       rules:{ 
            name:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            email:{
                required: true,
				email: true,
                minlength: 6,
                maxlength: 50
            }
       }
    });
	/*END validate */
	/*END RATING */
	$('.rp-stars').barrating('show', {
		showValues:true,
		showSelectedRating:false
	});
	/*END RATING */
	/*BEGIN HEADER CART */
	var $headerCart = jQuery("#header-cart");
	$headerCart.on("click touchstart", function(e) {
		var $clicked = jQuery(e.target),
			$this = jQuery(this),
			$headerCartStatus   = $headerCart.find('.header-middle__cart__status'),
			$headerCartSub      = $headerCart.find('.cart__sub'),
			$headerCartSubList  = $headerCartSub.find('.cart__sub__list'),
			$headerCartSubItem  = $headerCartSubList.find('.cart__sub__item'),
			$headerCartClose    = $headerCart.find('.cart__sub__close'),
			$headerCartProducts = $headerCart.find('#hm-cart-items'),
			$headerCartClear    = $headerCart.find('#cart-sub-clear'),
			headerCartCount     = $headerCartSubItem.length;
		//open
		if($clicked.parents().is($headerCartStatus) || $clicked.is($headerCartStatus)){
			if(headerCartCount){
				if($headerCart.hasClass('open')){
					$headerCartSub.css('display','none');
					$headerCartSubList.css('display','none');
				}
				else{
					$headerCartSub.css('display','block');
					$headerCartSubList.stop(true,true).slideDown(300);
				}
				$headerCart.stop(true,true).toggleClass('open');
			}
			return false
		}
		//remove item
		if($clicked.is($headerCartClose)){
			var $headerCart__item = $clicked.closest('.cart__sub__item');
			$headerCart__item.stop(true,true).animate({
				height: 0
			}, 300, function() {
				$headerCart__item.remove();
				if(headerCartCount <= 1){
					$headerCartProducts.html('empty');
					$headerCartSub.css('display','none');
					$headerCart.removeClass('open');
				}
			});
			return false
		}
		//remove all items
		if($clicked.is($headerCartClear)){
			$headerCartSubItem.stop(true,true).animate({
				height: 0
			}, 300, function() {
				$headerCartSubItem.remove();
				$headerCartProducts.html('empty');
				$headerCartSub.css('display','none');
				$headerCart.removeClass('open');
			});
			return false
		}
	});
	/*END HEADER CART */
	/*BEGIN HEADER SEARCH*/
	var $headerSearch = jQuery("#header-search"),
		$headerSearchSub = $headerSearch.closest('.search-sub'),
		$headerSearchContainer = $headerSearchSub.find('.search-sub__container'),
		$headerSearchSubStyled = $headerSearchSub.find('.styled');
	$headerSearch.on("click touchstart", function() {
		$headerSearchContainer.stop(true,true).slideToggle(300);
		$headerSearchSubStyled.styler();
		$headerSearchSubStyled.trigger('refresh');
		return false
	});
	/*END HEADER SEARCH*/
	/*BEGIN BTN FILTER*/
	var $productsFilterBtn = jQuery("#btn-filter"),
		$productsFilter = $productsFilterBtn.closest('.products-catalog__options'),
		$productsFilterHide = $productsFilter.find('.products-catalog__options__hide'),
		$filterSepia = jQuery('.sepia-filter');
	$productsFilterBtn.on("click touchstart", function() {
		$productsFilterHide.stop(true,true).slideToggle(300);
		$bestSellersMobileNav.removeClass('open');
		$bestSellersMobileNavHide.css('display','none');
		if(!$productsFilterBtn.is('open')){
			$filterSepia.stop(true,true).fadeIn(300);
			$productsFilterBtn.addClass('open');
		}else{
			$filterSepia.stop(true,true).fadeOut(300);
			$productsFilterBtn.removeClass('open');
		}
		return false
	});
	/*END BTN FILTER*/
	/*BEGIN HEADER NAV */
	var $headerMiddleNav = jQuery("#header-middle-nav"),
		$headerMiddleNavLink = $headerMiddleNav.find('a'),
		$headerMiddleNavSub = jQuery("#header-middle-nav-sub");
	$headerMiddleNavLink.on("click touchstart", function() {
		if($headerMiddleNav.hasClass('open')){
			$headerMiddleNavSub.stop(true,true).fadeOut(300);
		}
		else{
			$headerMiddleNavSub.stop(true,true).fadeIn(300);
		}
		$headerMiddleNav.toggleClass('open');
		return false
	});
	/*END HEADER NAV*/
	/*BEGIN MAIN SLIDER */
	var $mainSlider = jQuery('#main-slider'),
		$mainSliderControls = jQuery('#main-slider-controls'),
		$mainSliderControlsBox = $mainSliderControls.find('.main-slider__box');
	$mainSlider.flexslider({
		animation: "slide",
		slideshow: false,
		controlNav: false,
		directionNav: false,
		before: function(slider){
			$mainSliderControlsBox.removeClass('active').eq(slider.animatingTo).addClass('active');
		}
	});
	$mainSliderControlsBox.on("click", function() {	
		$mainSlider.flexslider($mainSliderControlsBox.index($(this)));
		return false
	});
	/*END MAIN SLIDER*/
	/*BEGIN promo-services__slider */
	jQuery('#promo-services__slider').flexslider({
		animation: "slide",
		slideshow: false,
		controlNav: false,
		directionNav: false,
		itemWidth: 190
	});
	/*END promo-services__slider*/
	/*BEGIN product-slider */
	jQuery('#product-slider').flexslider({
		animation: "slide",
		slideshow: false,
		controlNav: false
	});
	/*END product-slider*/
	/*BEGIN productOption */
	var $productOption = jQuery('.products-catalog__options'),
		$productOptionVisible = $productOption.find('.products-catalog__options__visible'),
		$productOptionHide = $productOption.find('.products-catalog__options__hide'),
		productOptionHeight = $productOptionVisible.outerHeight();
	$productOptionHide.css('top',productOptionHeight);
	/*END productOption */
	/*BEGIN best-sellers */
	function someCode($sellersNav, $sellersNavHide){
		if(!$sellersNav.is('open')){
			$sellersNavHide.stop(true,true).fadeIn(300);
			$sellersNav.addClass('open');
			$filterSepia.stop(true,true).fadeIn(300);
		}else{
			$sellersNavHide.stop(true,true).fadeOut(300);
			$sellersNav.removeClass('open');
			$filterSepia.stop(true,true).fadeOut(300);
		}
	}
	var $bestSellersMobileNav = jQuery('#best-sellers-mobile-nav'),
		$bestSellersMobileNavHide = $bestSellersMobileNav.find('.best-sellers__mobile-nav__hide'),
		$bestSellersMobileNavMenu = $bestSellersMobileNav.find('.menu-line');
	$bestSellersMobileNavMenu.on("click touchstart", function() {
		var $this = jQuery(this),
			$sellersNav = $this.closest('.best-sellers__mobile-nav'),
			$sellersNavHide = $sellersNav.find('.best-sellers__mobile-nav__hide');
		var bodyWidth = jQuery('body').width();
		if($bestSellersMobileNav.is('visible')){
			if(bodyWidth < 1030){
				someCode($sellersNav, $sellersNavHide);
			}
		}else{
			someCode($sellersNav, $sellersNavHide);
		}
		return false
	});
	/*END best-sellers */
	/*BEGIN trackslider*/
	var $tsBar = jQuery('#ts-bar')
	if (typeof v != 'undefined') {
		v.noUiSlider({
			start: [ 22, 28 ],
			connect: true,
			range: {
				'min': 0,
				'max': 70
			}
		});
	}
	$tsBar.Link('lower').to(jQuery('#ts-min'), null, wNumb({
		decimals: 0
	}));
	$tsBar.Link('upper').to(jQuery('#ts-max'), null, wNumb({
		decimals: 0
	}));
	/*END trackslider*/
	/*BEGIN dark nav*/
	var $darkNav = jQuery('#dark-nav'),
		$darkNavLink = $darkNav.find('a');
	$darkNavLink.on("click", function() {
		var $this = jQuery(this),
			$navItem = $this.closest('li'),
			bodyWidth = jQuery('body').width();
		if(bodyWidth > 768){
			if($navItem.hasClass('parent')){
				var $sepiaFilter = jQuery('.sepia-filter'),
					$navSub = $navItem.find('.sub');
				if(!$navItem.hasClass('open')){
					if($navItem.hasClass('lvl2')){
						var $navItem = $this.closest('.lvl2'),
							$navSub = $this.next('.sub');
						$navItem.addClass('open');
						$navSub.stop(true,true).fadeIn(300);
						$sepiaFilter.stop(true,true).fadeIn(300);
					}
					if($navItem.hasClass('lvl3')){
						var $navItem = $this.closest('.lvl3'),
							$navSub = $this.parent().find('.sub'),
							$lvl3 = jQuery('.lvl3');
						$lvl3.removeClass('open').find('.sub').stop(true,true).fadeOut(300);
						$navItem.addClass('open');
						$navSub.stop(true,true).fadeIn(300);
					}
				}else{
					if($navItem.hasClass('lvl2')){
						var $navItem = $this.closest('.lvl2'),
							$navSub = $this.next('.sub');
						$navItem.removeClass('open');
						$navSub.stop(true,true).fadeOut(300);
						$sepiaFilter.stop(true,true).fadeOut(300);
					}
					if($navItem.hasClass('lvl3')){
						var $navItem = $this.closest('.lvl3'),
							$navSub = $this.parent().find('.sub');
						$navItem.removeClass('open');
						$navSub.stop(true,true).fadeOut(300);
					}
				}
				return false
			}
		}else{
			if($navItem.hasClass('parent')){
				var $navSub = $navItem.find('.sub');
				if(!$navItem.hasClass('open')){
					if($navItem.hasClass('lvl2')){
						var $navItem = $this.closest('.lvl2'),
							$navSub = $this.next('.sub');
						$navItem.addClass('open');
						$navSub.stop(true,true).slideDown(300);
					}
				}else{
					if($navItem.hasClass('lvl2')){
						var $navItem = $this.closest('.lvl2'),
							$navSub = $this.next('.sub');
						$navItem.removeClass('open');
						$navSub.stop(true,true).slideUp(300);
					}
				}
				return false
			}
		}
	});
	jQuery('.d-nav__sub p').on("click", function() {
		var $this = $(this),
			$col = $this.closest('.col-xs-6'),
			$sub = $col.find('.d-nav__sub__list');
		$col.toggleClass('open');
		$sub.stop(true,true).slideToggle(300);
	});
	jQuery('.dark__nav__category').on("click", function() {
		var $this = $(this),
			$nav = $this.closest('.dark__nav'),
			$list = $nav.find('.dark__nav__list');
		if(!$nav.hasClass('open')){
			$nav.addClass('open');
			$list.stop(true,true).slideDown(300);
		}else{
			$nav.removeClass('open');
			$list.stop(true,true).slideUp(300);
		}
	});
	jQuery(document).on('click', function(e) {
		var $clicked = jQuery(e.target),
			$nav = jQuery('.dark__nav'),
			$navItem = $nav.find('.dark__nav__list > .parent'),
			$navSub = $nav.find('.d-nav__sub'),
			$navSubItem = $navSub.find('.parent'),
			$navSubLast = jQuery('.d-nav__sub-last'),
			$sepiaFilter = jQuery('.sepia-filter'),
			$productFilter = jQuery('.products-catalog__options__hide'),
			bodyWidth = jQuery('body').width();
		if(bodyWidth > 768){
			if(jQuery('.d-nav__sub').length){
				if(! $clicked.parents().hasClass("d-nav__sub")){
					$navSub.stop(true,true).fadeOut(300);
					$navItem.removeClass('open');
					$navSubLast.stop(true,true).fadeOut(300);
					$navSubItem.removeClass('open');
					$sepiaFilter.stop(true,true).fadeOut(300);
				}
			}
			if(! $clicked.parents().hasClass("d-nav__sub-last")){
				$navSubLast.stop(true,true).fadeOut(300);
				$navSubItem.removeClass('open');
			}
		}
		if(jQuery('.products-catalog__options').length){
			if(! $clicked.parents().hasClass("products-catalog__options__hide")){
				$productFilter.stop(true,true).fadeOut(300);
				$productsFilterBtn.removeClass('open');
				$sepiaFilter.stop(true,true).fadeOut(300);
			}
		}
	});
	/*END dark nav*/
	/*BEGIN product preview*/
	jQuery(".item").on({
		mouseenter: function () {
			var $this = jQuery(this).find('.item__info');
			$this.stop(true,true).fadeIn(300);
		},
		mouseleave: function () {
			var $this = jQuery(this).find('.item__info');
			$this.stop(true,true).fadeOut(300);
		}
	});
	/*END product preview*/
	/*BEGIN product taber*/
	var countTaber = $('.product-taber'),
		countTaberSize = countTaber.size();
	for(var i=0;i<countTaberSize;i++){
		var countTaberActiveLi = countTaber.eq(i).find('.active').index();
		countTaber.eq(i).find('.pt-tab').eq(countTaberActiveLi).fadeIn(300);
	}
	jQuery(".product-taber__head li").on("click touchstart", function() {
		var $this = jQuery(this),
			taberHead = $this.closest('.product-taber__head'),
			taberHeadLi = taberHead.find('li'),
			taberTab = taberHead.next('.product-taber__body').find('.pt-tab'),
			activeTab = $this.find('a').attr('href');
		taberHeadLi.removeClass('active');
		$this.addClass('active');
		taberTab.css('display','none');
		$(activeTab).fadeIn(300);
		return false
	});
	/*END product taber*/
});//end ready
jQuery(window).load(function($){
	/*BEGIN MASONRY */
	//Для маленьких разрешений
	var bodyWidth = jQuery('body').width(),
		$masonryContainer = jQuery('#container');
	if($masonryContainer.length){
		var container = document.querySelector('#container');
		var msnry = new Masonry( container, {
		  // options
		  itemSelector: '.item'
		});
	}
	if(jQuery('#container-more').length){
		var container = document.querySelector('#container-more');
		var msnry = new Masonry( container, {
		  // options
		  itemSelector: '.item'
		});
	}
	//Скрываем меню
	var $itemNavHeight = jQuery('.item-nav__height'),
		$itemNavHeightItem = $itemNavHeight.find('.item-nav');
	$itemNavHeightItem.css('display','none');
	//Замеряем высоту контейнера
	var mansoryContainerHeight = jQuery('#container').height();
	if(bodyWidth >= 1010){
		$itemNavHeightItem.css('height',mansoryContainerHeight - 20);
	}
	$itemNavHeightItem.delay(100).stop(true,true).fadeIn(200);
	/*BEGIN PRODUCT TITLE*/
	if(bodyWidth < 768){
		var $productBlock = jQuery('.block-product')
			$productTitle = $productBlock.find('h1'),
			productTitleHeight = $productTitle.outerHeight(),
			productTitleHeight = productTitleHeight+30,
			$productSlider = $productBlock.find('.flexslider');
		$productSlider.css('padding-top',productTitleHeight);
		$productTitle.css({'position':'absolute','top':'0','left':'15px'});
	}
	/*END PRODUCT TITLE*/
	jQuery(window).on({
		resize:function(){
			if($masonryContainer.length){
				var $masonryNav = $masonryContainer.find('.item-nav'),
					$masonryNavHeight = $masonryContainer.find('.item-nav__height');
				$masonryNavHeight.css('height','auto');
				$masonryNav.css('height','auto');
				$masonryContainer.masonry();
			}
			//Скрываем и показываем сепию для навигации
			var $selNav = jQuery('.best-sellers__mobile-nav');
			if($selNav.length && $selNav.hasClass('open')){
				$selNav.removeClass('open');
				$selNav.find('.best-sellers__mobile-nav__hide').css('display','none');
				$sepiaFilter.css('display','none');
			}
			//Подбираем верную высоту раскрытия фильтров
			var $productOption = jQuery('.products-catalog__options'),
				$productOptionVisible = $productOption.find('.products-catalog__options__visible'),
				$productOptionHide = $productOption.find('.products-catalog__options__hide'),
				productOptionHeight = $productOptionVisible.outerHeight();
			$productOptionHide.css('top',productOptionHeight);
			//product title
			var $productBlock = jQuery('.block-product')
					$productTitle = $productBlock.find('h1'),
					productTitleHeight = $productTitle.outerHeight(),
					productTitleHeight = productTitleHeight+30,
					$productSlider = $productBlock.find('.flexslider');
			if(bodyWidth < 768){
				$productSlider.css('padding-top',productTitleHeight);
				$productTitle.css({'position':'absolute','top':'0','left':'15px'});
			}else{
				$productSlider.css('padding-top','63px');
				$productTitle.css({'position':'static','top':'0','left':'0'});
			}
		}
	});
	/*END MASONRY */
});//end load