var type = new Typed('.typing-text', {
	strings: ['', 'Front End Developer', 'Web Designer', 'SEO Web Editor'],
	typeSpeed: 200,
	loop: true,
});

let themecolor = document.querySelectorAll('.theme-toggler span');

themecolor.forEach((color) =>
	color.addEventListener('click', () => {
		let background = color.style.background;
		document.querySelector('body').style.background = background;
	})
);
