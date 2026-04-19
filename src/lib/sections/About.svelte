<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';
	import { activeId } from '$lib/active-section';
</script>

<section id="about" class="section" {@attach reveal}>
	<div class="section-inner">
		<h2 class="section-heading">About</h2>
		<div class="section-body">
			<p class="intro">
				I'm <span>Gabriel Oliveira D'Andrea Alves</span>, a full-stack web developer with 5 years of
				experience building high-performance, responsive applications. Specialized in performance
				optimization, responsiveness, and accessibility. Proven track record in database design, API
				development, and modernizing legacy codebases (Ruby on Rails, C#) while prioritizing user
				experience and rapid iteration.
			</p>
			<p>Based in São Paulo, SP, Brazil.</p>
		</div>
	</div>
	<div class="section-icon" class:visible={$activeId === 'about'} aria-hidden="true">
		<!-- Globe icon courtesy of Lucide -->
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
			<path
				d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
			/>
			<path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
			<circle cx="12" cy="12" r="10" />
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
		color: color-mix(in oklch, var(--color-border) 40%, var(--color-bg));
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
		}

		& :global(svg) {
			width: 140px;
			height: 140px;
			stroke-width: 1.5;
			overflow: clip;

			@media (min-width: 480px) {
				padding-left: 1rem;
				width: 420px;
				height: 420px;
				stroke-width: 1;
				transform: rotateZ(15deg);
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

	.section-body :global(p + p) {
		margin-top: 1rem;
	}

	.section-body :global(.intro) {
		font-size: clamp(0.95rem, 1.2vw, 1.05rem);

		& span {
			text-decoration: underline;
			text-decoration-thickness: 1px;
			text-decoration-color: var(--color-border);
		}
	}
</style>
