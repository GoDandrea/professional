import type { Attachment } from 'svelte/attachments';

export const reveal: Attachment = (element) => {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				observer.disconnect();
				element.classList.add('visible');
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(element);

	return () => observer.disconnect();
};
