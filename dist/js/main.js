'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
// header

//Nếu hover sẽ hiện các item dropdown
function hoverDropdownItem() {

	// khi mouse over
	$('.nav-item').on('mouseover', function (e) {
		if ($(this).find('.dropdown-menu').length) {
			//nếu có .dropdown-menu thì show
			$(this).addClass('show');
			$(this).find('.dropdown-menu').addClass('show');
		}
	});

	// khi mouse out
	$('.nav-item').on('mouseout', function (e) {
		if ($(this).find('.dropdown-menu').length) {
			//nếu có .dropdown-menu thì remove show
			$(this).removeClass('show');
			$(this).find('.dropdown-menu').removeClass('show');
		}
	});
}

function showBtnToggler() {
	if ($(window).width() > 768) {
		document.getElementById('toggle').style.display = 'none'; // ẩn nút toggle
		$('#MenuHeader').addClass('show'); // hiển thị các nav link
		$('.navbar').append($('.searchbar')); // đưa searchbar về phía sau các nav
		hoverDropdownItem();
	} else {
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
});

$(window).resize(function () {
	showBtnToggler();
});

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
//# sourceMappingURL=main.js.map
