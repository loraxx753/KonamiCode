var KonamiCode = (function() {
	var keyMap = {
		"UP"    : 38,
		"DOWN"  : 40,
		"LEFT"  : 37,
		"RIGHT" : 39,
		"B"     : 66,
		"A"     : 65,
		"ENTER" : 13
	};

	var useEnter = false;
	var counter = 0;
	function init(callback) {
		// UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A ENTER
		$(document).on("keydown", function(e) {

			if((e.which == keyMap.UP && counter < 2) ||
				(e.which == keyMap.DOWN && counter < 4) ||
				(e.which == keyMap.LEFT && (counter == 4 || counter == 6)) ||
				(e.which == keyMap.RIGHT && (counter == 5 || counter == 7)) ||
				(e.which == keyMap.B && counter == 8) ||
				(e.which == keyMap.A && counter == 9)) {
				
				counter++;
			}
			else {
				if(e.which == keyMap.ENTER && KonamiCode.useEnter && counter == 10) {
					counter = 0;
					callback();
					return;
				}
			}
			if(counter == 10 && !KonamiCode.useEnter) {
				callback();
				counter = 0;
				return;	
			}
		});
	};

	return {
		"init" : init,
		"useEnter" : useEnter
	}


})();