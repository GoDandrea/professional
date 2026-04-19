<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';
	import { activeId } from '$lib/active-section';
</script>

<section id="skills" class="section" {@attach reveal}>
	<div class="section-inner">
		<h2 class="section-heading">Skills</h2>
		<div class="section-body">
			<p>
				Core expertise in <strong>performance optimization</strong> and
				<strong>cross-platform development</strong> — building applications that ship to both web and
				mobile from a single codebase. Experienced in modernizing legacy systems in Ruby on Rails and
				C#, bringing them forward with modern frontend frameworks while maintaining stability.
			</p>
			<p>
				Comfortable across the full stack: from database schema design and API development to
				responsive, accessible UI implementation. Primary technologies include TypeScript,
				SvelteKit, React, Next.js, and Expo (React Native).
			</p>
		</div>
	</div>
	<div class="section-icon" class:visible={$activeId === 'skills'} aria-hidden="true">
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
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

	.section-body :global(strong) {
		color: var(--color-text);
		font-weight: 600;
	}
</style>
