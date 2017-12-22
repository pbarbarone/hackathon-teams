$('.delete').click(function (e){
	e.preventDefault();
	$.ajax({
		url: $(this).attr('href'),
		method: 'DELETE'
	}).done(function(data){
		window.location.href='/teams';
	});
});


$('.update-team').click(function (e){
	e.preventDefault();
	$.ajax({
		url: $(this).attr('href'),
		method: 'PUT'
	}).done(function(data){
		window.location.href='/teams/:name'
	})
})