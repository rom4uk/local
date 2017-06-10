 var langElems = document.getElementsByName('lang');
 var getCurrentLanguage = function () {
 	var defaultLanguage;
 	if (localStorage.language) {
 		defaultLanguage = localStorage.getItem("language");
 	} else {
 		defaultLanguage = 'ua';
 	}
 	langElems.forEach(function (item) {
 		if (item.checked) {
 			defaultLanguage = item.value;
 		}
 	});
 	return defaultLanguage;
 }
 var currentLang = getCurrentLanguage();
 for (var i = 0; i < langElems.length; i++) {
 	elemLang = langElems[i];
 	elemLang.addEventListener('click', function(){
 		show();
 	})
 }
 function show() {
 	currentLang = getCurrentLanguage();
 	var langEls = document.getElementsByClassName('lang-' + currentLang);
 	for (var i = 0; i < langEls.length; i++) {
 		var langEl = langEls[i];
 		langEl.classList.add('visible');
 	}
 	hide(currentLang);
 }
 show();
 function hide() {
 	var langHide = document.getElementsByClassName('lang');
 	for (var i = 0; i < langHide.length; i++) {
 		elemLang = langHide[i];
 		if (!(elemLang.classList.contains("lang-" + currentLang))) {
 			if (elemLang.classList.contains('visible')) {
 				elemLang.classList.remove('visible');
 			}
 		}
 	}
 }
 var $save = document.querySelector('#save')
 $save.addEventListener('click', function(){
 	localStorage.setItem("language", getCurrentLanguage());
 	alert('now language is: ' + currentLang);
 });


