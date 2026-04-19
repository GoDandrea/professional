<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';
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
</section>

<style>
	.section {
		padding: var(--section-spacing) var(--content-padding);
		border-top: 1px solid var(--color-border-subtle);

		&:global(.visible) .section-heading,
		&:global(.visible) .section-body {
			opacity: 1;
			transform: translateY(0);
		}
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
