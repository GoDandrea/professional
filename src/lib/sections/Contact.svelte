<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';

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
</section>

<style>
	.section {
		padding: var(--section-spacing) var(--content-padding);
		border-top: 1px solid var(--color-border-subtle);
	}

	.section-inner {
		max-width: var(--max-width-text);
	}

	.section-heading {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		margin-bottom: 1.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;
	}

	.section-body {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out 0.1s,
			transform 0.5s ease-out 0.1s;
	}

	.section:global(.visible) .section-heading,
	.section:global(.visible) .section-body {
		opacity: 1;
		transform: translateY(0);
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

	.contact-link:hover .contact-icon {
		border-color: var(--color-accent-strong);
	}

	@media (prefers-reduced-motion: reduce) {
		.section-heading,
		.section-body {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
