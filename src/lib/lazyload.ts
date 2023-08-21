const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0
};

export function lazyload(image: HTMLImageElement, src: string) {
	const observer = new IntersectionObserver(handleIntersection, options);

	function loaded() {
		image.style.opacity = '1';
	}

	function handleIntersection(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				image.src = src;
				image.onload = loaded;

				if (image.complete) {
					loaded();
				} else {
					image.addEventListener('load', loaded);
				}
			}
		});
	}

	observer.observe(image);

	return {
		destroy() {
			image.removeEventListener('load', loaded);
			observer.unobserve(image);
		}
	};
}
