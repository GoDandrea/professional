<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { reveal } from '$lib/attachments/reveal';
	import { activeId } from '$lib/active-section';
</script>

<section id="projects" class="section" {@attach reveal}>
	<div class="section-inner">
		<h2 class="section-heading">Projects</h2>
		<ul class="projects-list">
			{#each projects as project (project.title)}
				<li class="project-card">
					<h3 class="project-title">{project.title}</h3>
					<p class="project-context">{project.context}</p>
					<p class="project-description">{project.description}</p>
					<div class="project-tags">
						{#each project.tags as tag (tag)}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="section-icon" class:visible={$activeId === 'projects'} aria-hidden="true">
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="m10.586 5.414-5.172 5.172" />
			<path d="m18.586 13.414-5.172 5.172" />
			<path d="M6 12h12" />
			<circle cx="12" cy="20" r="2" />
			<circle cx="12" cy="4" r="2" />
			<circle cx="20" cy="12" r="2" />
			<circle cx="4" cy="12" r="2" />
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
			gap: 2rem;
		}

		&:global(.visible) .section-heading {
			opacity: 1;
			transform: translateY(0);
		}

		&:global(.visible) .project-card {
			opacity: 1;
			transform: translateY(0);

			&:nth-child(1) {
				transition-delay: 0s;
			}

			&:nth-child(2) {
				transition-delay: 0.15s;
			}
		}
	}

	.section-inner {
		max-width: min(var(--max-width-cards), 45vw);
	}

	.section-icon {
		display: none;
		opacity: 0;
		overflow: hidden;
		color: color-mix(in oklch, var(--color-border) 40%, var(--color-bg));
		transition: opacity 0.5s ease;

		@media (min-width: 1024px) {
			display: block;
			position: absolute;
			right: 5%;
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
		margin-bottom: 2rem;
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

	.projects-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.project-card {
		background-color: var(--color-bg-card);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		padding: 1.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out,
			box-shadow 0.3s ease;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 4px 12px oklch(0.2732 0.014 67.18 / 0.08);
		}

		@media (prefers-reduced-motion: reduce) {
			opacity: 1;
			transform: none;
			transition: box-shadow 0.3s ease;

			&:hover {
				transform: none;
			}
		}
	}

	.project-title {
		font-family: var(--font-heading);
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: 0.25rem;
	}

	.project-context {
		font-size: 0.8rem;
		color: var(--color-accent-strong);
		margin-bottom: 0.75rem;
		font-weight: 500;
	}

	.project-description {
		font-size: 0.9rem;
		line-height: 1.65;
		color: var(--color-text-body);
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
		margin-top: 1rem;
	}

	.tag {
		display: inline-block;
		background-color: var(--color-tag-bg);
		color: var(--color-tag-text);
		padding: 0.15rem 0.5rem;
		border-radius: 3px;
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.02em;
	}
</style>
