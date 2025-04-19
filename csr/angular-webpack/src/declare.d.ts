declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare module 'color-rgba' {
	const rgba: (value: string) => [number, number, number, number];
	export = rgba;
}

declare module 'rgba-convert' {
	const rgba: {
		arr: (value: string) => number[];
		css: (value: string) => string;
		hex: (value: string) => string;
	};
	export = rgba;
}
