/* document.querySelectorAll('.nav .nav-link').forEach(a => {
	a.addEventListener('click', e => {
		e.preventDefault();
		if (!e.target.className.includes('active')) {
			document.querySelectorAll('.nav .nav-link').forEach(a => {
				a.className = 'nav-link';
			})
			e.target.className += ' active';
		}
	});
}); */

$('.nav a').on('click', function(e) {
	e.preventDefault();
	$('.nav a').removeClass('active');
	$(this).addClass('active');
})

$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$('.carousel').carousel({
		interval: 5000,
		pause: false,
		wrap: false,
		keyboard: true,
	});
});