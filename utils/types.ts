export type PatternData = {
	id: string,
	company: string,
	patternName: string,
	imageSrc: string,
	tags: string[]
	patternUrl?: string,
	price?: string,
	comments?: string, 
	printed?: boolean,
	projectorFriendly?: boolean,
	files?: string[]
}