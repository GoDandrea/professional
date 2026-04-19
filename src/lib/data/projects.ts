interface Project {
	title: string;
	context: string;
	description: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: 'Cross-Platform Transpiler Workflow',
		context: 'Internal/Proprietary · Irya Solutions',
		description:
			'Unified development pipeline allowing a single codebase to deploy to web (Next.js) and mobile (Expo), streamlining deployment and maintenance for multiple platforms.',
		tags: ['Next.js', 'Expo', 'TypeScript']
	},
	{
		title: 'Performance Optimization Suite',
		context: 'Irya Solutions',
		description:
			'Custom tooling and strategies that achieved a 60% reduction in main thread blocking time and eliminated layout shifts (CLS) to zero, significantly boosting Core Web Vitals.',
		tags: ['Core Web Vitals', 'Performance']
	}
];
