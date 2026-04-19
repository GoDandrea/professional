<script lang="ts">
	import { projects } from '$lib/data/projects';

	let visible = $state(false);

	$effect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(document.getElementById('projects')!);

		return () => observer.disconnect();
	});
</script>

<section id="projects" class="section" class:visible>
	<div class="section-inner">
		<h2 class="section-heading">Projects</h2>
		<ul class="projects-list">
			{#each projects as project, i (project.title)}
				<li class="project-card" style:transition-delay={visible ? `${i * 0.15}s` : '0s'}>
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
</section>

<style>
	.section {
		padding: var(--section-spacing) var(--content-padding);
		border-top: 1px solid var(--color-border-subtle);
	}

	.section-inner {
		max-width: var(--max-width-cards);
	}

	.section-heading {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		margin-bottom: 2rem;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;
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
	}

	.project-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px oklch(0.2732 0.014 67.18 / 0.08);
	}

	.section.visible .section-heading {
		opacity: 1;
		transform: translateY(0);
	}

	.section.visible .project-card {
		opacity: 1;
		transform: translateY(0);
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

	@media (prefers-reduced-motion: reduce) {
		.section-heading,
		.project-card {
			opacity: 1;
			transform: none;
			transition: box-shadow 0.3s ease;
		}

		.project-card:hover {
			transform: none;
		}
	}
</style>
