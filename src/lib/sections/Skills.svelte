<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';
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

	.section-body :global(p + p) {
		margin-top: 1rem;
	}

	.section-body :global(strong) {
		color: var(--color-text);
		font-weight: 600;
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
