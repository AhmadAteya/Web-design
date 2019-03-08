
// header height
$navbar=$(".navbar").innerHeight();
$(".carousel").height($(window).innerHeight()-$navbar);
$(window).resize(function () {
	$(".carousel").height($(window).innerHeight()-$navbar);
});

$(".carousel img").height($(window).innerHeight()-$navbar);
$(window).resize(function () {
	$(".carousel img").height($(window).innerHeight()-$navbar);
});

