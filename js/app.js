 $(document).ready(function(){


 	// Start Back To Top

 	$(".btn-backtotop").hide();
 	$(window).scroll(function(){
 		let getscrolltop = $(this).scrollTop();
 		// console.log(getscrolltop);
 		if(getscrolltop >= 370){
			$(".btn-backtotop").fadeIn(1000);
		}else{
		$(".btn-backtotop").fadeOut(1000);
		}

 	});

	// End Back To Top

	// Start header
	// Start nav
	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs");
	});

	// for navbar
	$(window).scroll(function(){

		let getscrolltop = 	$(this).scrollTop();
		// console.log(getscrolltop);
		if(getscrolltop >= 200){
			$(".navbar").addClass("navmenus");
		}else{
		$(".navbar").removeClass("navmenus");
		}
	});

	// End nav
	// End header

	// Start Property
	// for active items

	$(".propertylist").click(function(){
		$(this).addClass("activeitems").siblings().removeClass("activeitems");

		// for filter
		let getattvalue = $(this).attr("data-filter");
		// console.log(getattvalue); 

		if(getattvalue === "all"){
			$(".filters").show("slide",1000);
		}else{
			$(".filters").not("."+getattvalue).hide("slide",1000);
			$(".filters").filter("."+getattvalue).show("slide",1000);		
		}
	});

	lightbox.option({
     showImageNumberLabel: false
    });
	// End Property

	// Start adv
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);
		if(getscrolltop >= 900){
			$(".advimg").addClass("fromlefts");
			$(".advtext").addClass("fromrights");
		}else{
			$(".advimg").removeClass("fromlefts");
			$(".advtext").removeClass("fromrights");
		}
	});
	// End adv

	// Start Footer
	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End Footer

});