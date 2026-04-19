<script lang="ts">
	import { reveal } from '$lib/attachments/reveal';
</script>

<section id="hero" class="hero" {@attach reveal}>
	<div class="hero-content">
		<h1 class="hero-brand">
			<span class="hero-go">go</span>
			<span class="hero-dandrea">Dandrea</span>
		</h1>
		<div class="hero-role-wrapper">
			<span class="hero-role-line"></span>
			<p class="hero-role">Full-Stack Web Developer</p>
		</div>
	</div>
</section>

<style>
	.hero {
		display: flex;
		align-items: center;
		min-height: 100vh;
		min-height: 100dvh;
		padding: var(--content-padding);
		padding-top: 5rem;

		&:global(.visible) .hero-content {
			opacity: 1;
			transform: translateY(0);
		}

		@media (min-width: 481px) {
			padding-left: clamp(2.5rem, 8vw, 5rem);
		}
	}

	.hero-content {
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;

		@media (prefers-reduced-motion: reduce) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}

	.hero-brand {
		font-style: italic;
		font-weight: 800;
		font-size: clamp(3.5rem, 22vw, 28rem);
		color: var(--color-text);
		letter-spacing: -0.03em;
		line-height: 1.05;
	}

	.hero-go {
		display: block;
	}

	.hero-dandrea {
		display: block;
		margin-left: clamp(2rem, 6vw, 7rem);
		position: relative;
		bottom: clamp(0.75rem, 8vw, 9.5rem);

		@media (max-width: 480px) {
			margin-left: clamp(1rem, 6vw, 5rem);
			bottom: clamp(0.75rem, 8vw, 6.5rem);
		}
	}

	.hero-role-wrapper {
		margin-top: calc(clamp(0.75rem, 8vw, 9.5rem) * -1 + 0.5rem);
		display: flex;
		align-items: center;
		gap: 1rem;

		@media (min-width: 1024px) {
			margin-left: clamp(2rem, 6vw, 7rem);
		}
	}

	.hero-role-line {
		display: none;

		@media (min-width: 1024px) {
			display: block;
			flex: 1;
			height: 1.5px;
			background: var(--color-accent);
		}
	}

	.hero-role {
		font-size: clamp(0.75rem, 1.5vw, 0.9rem);
		font-weight: 500;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-accent-strong);
		text-align: right;
		margin-left: auto;

		@media (min-width: 1024px) {
			white-space: nowrap;
		}
	}
</style>
