$(document).ready(function(){
	$('#LOG').click(function(){
		$('#logBox').fadeToggle('10');
	});
	$('#login button').click(function(){
		$('#erInfo').fadeToggle('10');
	});
	$(document).scroll(function(e){
		if($(document).scrollTop() >= 100){
			var height = $(document).scrollTop();
			var distance = parseInt( $('#left').css('width').split('px')[0] ) + parseInt( $('#container').css('margin-left').split('px')[0] ) + 51;
			$('#rightBox').css({'position': 'fixed', 'left': distance, 'top': 10, });
		}
		else{
			$('#rightBox').css({'position': 'relative', 'left': 0, 'top': 0, });
		}
	});
});
