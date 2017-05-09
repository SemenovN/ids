window.onload = function() {
	tamingselect();
	svg4everybody();
	var langPanel = document.querySelector('.header-page__locales');
	var langList = document.querySelector('.locales__list');
	langPanel.onmouseover = function() {
		langList.classList.add('visible');
	}
	langPanel.onmouseout = function() {
		langList.classList.remove('visible');
	}
	var linksMenu = document.querySelectorAll('.header-page__menu .menu__link');
	linksMenu.forEach(function(el, i, linksMenu) {
		if(el.href === window.location.href)
			el.classList.add('active')
	});

}