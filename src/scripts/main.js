// header

//Nếu hover sẽ hiện các item dropdown
function hoverDropdownItem(){

	// khi mouse over
	$('.nav-item').on('mouseover', function(e) {
		if($(this).find('.dropdown-menu').length){     //nếu có .dropdown-menu thì show
			$(this).addClass('show');
			$(this).find('.dropdown-menu').addClass('show');
		}
	});

	// khi mouse out
	$('.nav-item').on('mouseout', function(e) {
		if($(this).find('.dropdown-menu').length){     //nếu có .dropdown-menu thì remove show
			$(this).removeClass('show');
			$(this).find('.dropdown-menu').removeClass('show');
		}
	});

}

function showBtnToggler(){
	if ($(window).width()> 768) {
		document.getElementById('toggle').style.display = 'none'; // ẩn nút toggle
		$('#MenuHeader').addClass('show');// hiển thị các nav link
		$('.navbar').append($('.searchbar')); // đưa searchbar về phía sau các nav
		hoverDropdownItem();
	}
	else{
		document.getElementById('toggle').style.display = 'inline-block';
		$('#MenuHeader').removeClass('show');
		$('.navbar').append($('#toggle'));
		$('.navbar').append($('#MenuHeader'));
	}
}
function header_Toggle() {
	$('header .navbar-toggler').on("click", function () {
		$('header').toggleClass('expand');
	});
}

$(function () {
	header_Toggle();
	showBtnToggler();
})

$(window).resize(function () {
	showBtnToggler();
})

// $("header a").on('click', function(event) {
// 	if (this.hash !== "") {
// 		event.preventDefault();
// 		var hash = this.hash;
// 		$('html, body').animate({
// 			scrollTop: $(hash).offset().top
// 		}, 500, function() {
// 			window.location.hash = hash;
// 		});
// 	}
// 	$('#MenuHeader').removeClass('show')
// });
