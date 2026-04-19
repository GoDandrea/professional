<script lang="ts">
	import { activeId } from '$lib/active-section';

	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	let scrolled = $state(false);

	// Update scrolled state
	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 50;
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	});

	// Update activeId with current section
	$effect(() => {
		const visible = new Set<string>();
		const observers: IntersectionObserver[] = [];

		function updateActiveId() {
			const atBottom =
				window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
			activeId.set(atBottom ? 'contact' : (sections.find((s) => visible.has(s.id))?.id ?? ''));
		}

		for (const section of sections) {
			const element = document.getElementById(section.id);
			if (!element) continue;
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						visible.add(section.id);
					} else {
						visible.delete(section.id);
					}
					updateActiveId();
				},
				{ rootMargin: '-20% 0px -60% 0px' }
			);
			observer.observe(element);
			observers.push(observer);
		}

		const onScroll = () => updateActiveId();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			for (const observer of observers) {
				observer.disconnect();
			}
			window.removeEventListener('scroll', onScroll);
			visible.clear();
		};
	});

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<nav class="nav" class:scrolled aria-label="Main navigation">
	<div class="nav-inner">
		<button
			class="nav-logo"
			class:visible={scrolled}
			onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label="Go to top"
		>
			<span class="nav-logo-go">go</span>
			<span class="nav-logo-dandrea">Dandrea</span>
		</button>
		<ul class="nav-links">
			{#each sections as section (section.id)}
				<li>
					<button
						class="nav-link"
						class:active={$activeId === section.id}
						onclick={() => scrollTo(section.id)}
						aria-current={$activeId === section.id ? 'true' : undefined}
					>
						{section.label}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease;

		&.scrolled {
			background-color: oklch(0.9743 0.0102 81.8 / 0.9);
			backdrop-filter: blur(8px);
			box-shadow: 0 1px 0 oklch(0.8407 0.0239 75.83);
		}
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem var(--content-padding);
	}

	.nav-logo {
		font-family: var(--font-heading);
		font-size: 1rem;
		font-style: italic;
		font-weight: 800;
		line-height: 0.8;
		letter-spacing: -0.03em;
		color: var(--color-text);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		opacity: 0;
		transform: translateY(-4px);
		pointer-events: none;
		transition:
			opacity 0.3s ease,
			transform 0.3s ease;

		&.visible {
			opacity: 1;
			transform: translateY(0);
			pointer-events: auto;
		}
	}

	.nav-logo-go {
		display: block;
		margin-right: 3.35rem;
		position: relative;
		top: 0.05rem;
	}

	.nav-logo-dandrea {
		display: block;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 1.5rem;

		@media (max-width: 480px) {
			gap: 1rem;
		}
	}

	.nav-link {
		font-size: 0.8125rem;
		font-weight: 500;
		letter-spacing: 0.03em;
		color: var(--color-text-muted);
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		position: relative;
		transition: color 0.2s ease;

		&:hover,
		&.active {
			color: var(--color-accent-strong);
		}

		&::after {
			content: '';
			position: absolute;
			bottom: -2px;
			left: 0;
			width: 0;
			height: 1.5px;
			background-color: var(--color-accent-strong);
			transition: width 0.3s ease;
		}

		&:hover::after,
		&.active::after {
			width: 100%;
		}

		@media (max-width: 480px) {
			font-size: 0.75rem;
		}
	}
</style>
