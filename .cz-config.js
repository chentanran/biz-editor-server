module.exports = {
	types: [
			{
					value: 'WIP',
					name: 'ð¡  WIP: Work in progress', // å¼åä¸­
			},
			{
					value: 'feat',
					name: 'ð  feat: A new feature', // æ°åè½
			},
			{
					value: 'fix',
					name: 'ð§  fix: A bug fix', // ä¿®æ¹bug
			},
			{
					value: 'refactor',
					name: 'ð¨  refactor: A code change that neither fixes a bug nor adds a feature', // æ¢ä¸ä¿®å¤bugä¹ä¸æ·»å ç¹æ§çä»£ç æ´æ¹
			},
			{
					value: 'release',
					name: 'ð³  release: Bump to a new Semantic version', // æ°çæ¬
			},
			{
					value: 'docs',
					name: 'ð  docs: Documentation only changes', // ææ¡£
			},
			{
					value: 'test',
					name: 'ð  test: Add missing tests or correcting existing tests', // æµè¯
			},
			{
					value: 'perf',
					name: 'â¡ï¸  perf: Changes that improve performance', // æé«æ§è½çæ´æ¹
			},
			{
					value: 'chore',
					name:
							"ð¬  chore: Changes that don't modify src or test files. Such as updating build tasks, package manager", // æå»ºè¿ç¨æè¾å©å·¥å·çåå¨
			},
			{
					value: 'workflow',
					name:
							'ð¦  workflow: Changes that only affect the workflow. Such as updating build systems or CI etc.', // å½±åå·¥ä½æµçä¿®æ¹
			},
			{
					value: 'style',
					name:
							'ð  style: Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)', // æ ·å¼
			},
			{
					value: 'revert',
					name: 'â±  revert: Revert to a commit', // æ¢å¤æäº¤
			},
	],
	// Specify the scopes for your particular project
	scopes: [],
	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix'],
}
