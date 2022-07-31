jQuery('document').ready(function() {
	
	var value1, value2, value3;
	
	jQuery('#val1').val(0);
	jQuery('#val2').val(0);
	
	jQuery('input').on('keyup', function() {
		
		value1 = jQuery('#val1').val();
		value2 = jQuery('#val2').val();
		
		value1 = parseInt(value1);
		value2 = parseInt(value2);
		
		value3 = value1 + value2;
		
		jQuery('#reselut').html( 'Результат: ' + value3 );
		
	});
	
});
