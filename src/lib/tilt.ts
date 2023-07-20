const TRANSITION_MS = 300;

export interface TiltSettings {
	scale?: number;
	max?: number;
	reverse?: boolean;
}

function getSettings(settings: TiltSettings) {
	return {
		scale: 1,
		max: 15,
		reverse: false,
		...settings
	};
}

export default function Tilt(node: HTMLElement, settingsObj: TiltSettings) {
	const { width, height, left, top } = node.getBoundingClientRect();

	let settings = getSettings(settingsObj);
	let reverse = settings.reverse ? -1 : 1;
	let transitionId: ReturnType<typeof setTimeout>;

	function onMouseMove(event: MouseEvent) {
		const percentX = (event.clientX - left) / width;
		const percentY = (event.clientY - top) / height;
		const { max, scale } = settings;
		const twiceMax = max * 2;
		const tiltX = (percentX * twiceMax - max) * reverse;
		const tiltY = (percentY * twiceMax - max) * reverse;

		node.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale(${scale})`;
	}

	function smoothTransition() {
		clearTimeout(transitionId);
		node.style.willChange = 'transform';
		node.style.transition = `transform ${TRANSITION_MS}ms`;
		transitionId = setTimeout(() => {
			node.style.transition = '0s';
		}, TRANSITION_MS);
	}

	function onMouseEnter() {
		smoothTransition();
		node.style.willChange = 'transform';
	}

	function onMouseLeave() {
		smoothTransition();
		node.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
	}

	node.addEventListener('mousemove', onMouseMove);
	node.addEventListener('mouseenter', onMouseEnter);
	node.addEventListener('mouseleave', onMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseenter', onMouseEnter);
			node.removeEventListener('mouseleave', onMouseLeave);
		},
		update(newSettings: TiltSettings) {
			settings = getSettings(newSettings);
			reverse = settings.reverse ? -1 : 1;
		}
	};
}
