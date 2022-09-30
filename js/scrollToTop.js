const scroll = () => {
	const topBtn = document.querySelector('#scrollToTopButton')
	topBtn.addEventListener('click', e => {
		seamless.scrollIntoView(document.querySelector('.header'), {
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		})
	})
}

scroll()
