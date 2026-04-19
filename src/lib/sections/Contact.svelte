<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';
	import { activeId } from '$lib/active-section';

	interface ContactLink {
		label: string;
		href: string;
		icon: string;
	}

	const links: ContactLink[] = [
		{ label: 'godandrea@proton.me', href: 'mailto:godandrea@proton.me', icon: '@' },
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/gabriel-d-andrea-4163aab8',
			icon: 'in'
		}
	];
</script>

<section id="contact" class="section" {@attach reveal}>
	<div class="section-inner">
		<h2 class="section-heading">Contact</h2>
		<div class="section-body">
			<p class="contact-intro">Interested in working together? Reach out.</p>
			<ul class="contact-links">
				{#each links as link (link.href)}
					<li>
						<a href={link.href} rel="external" class="contact-link">
							<span class="contact-icon">{link.icon}</span>
							<span class="contact-label">{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="section-icon" class:visible={$activeId === 'contact'} aria-hidden="true">
		<!-- Send icon courtesy of Lucide -->
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
			/>
			<path d="m21.854 2.147-10.94 10.939" />
		</svg>
	</div>
</section>

<style>
	.section {
		padding: var(--section-spacing) var(--content-padding);
		border-top: 1px solid var(--color-border-subtle);

		@media (min-width: 480px) {
			display: flex;
			align-items: center;
			gap: 4rem;
		}

		&:global(.visible) .section-heading,
		&:global(.visible) .section-body {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.section-inner {
		max-width: var(--max-width-text);
	}

	.section-icon {
		display: none;
		opacity: 0;
		overflow: hidden;
		color: var(--color-border);
		transition: opacity 0.5s ease;

		@media (min-width: 480px) {
			display: block;
			position: absolute;
			right: 5%;
		}

		@media (min-width: 1024px) {
			color: var(--color-border);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			right: 15%;
		}

		& :global(svg) {
			width: 140px;
			height: 140px;
			stroke-width: 1.5;
			overflow: clip;

			@media (min-width: 480px) {
				padding-left: 1rem;
				width: 270px;
				height: 270px;
				stroke-width: 1;
				margin-right: 20%;
			}
		}

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		&.visible {
			opacity: 0.3;
		}
	}

	.section-heading {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		margin-bottom: 1.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;

		@media (prefers-reduced-motion: reduce) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}

	.section-body {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out 0.1s,
			transform 0.5s ease-out 0.1s;

		@media (prefers-reduced-motion: reduce) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}

	.contact-intro {
		margin-bottom: 1.5rem;
	}

	.contact-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.contact-link {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: var(--color-accent-strong);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		position: relative;
		transition: color 0.2s ease;

		&:hover .contact-icon {
			border-color: var(--color-accent-strong);
		}
	}

	.contact-label {
		display: inline-flex;
		flex-direction: column;

		&::after {
			content: '';
			width: 0;
			height: 1px;
			background-color: var(--color-accent-strong);
			transition: width 0.3s ease;
		}

		&:hover::after {
			width: 100%;
		}
	}

	.contact-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border: 1px solid var(--color-accent);
		font-size: 0.8rem;
		font-weight: 600;
		flex-shrink: 0;
		transition: border-color 0.2s ease;
	}
</style>
