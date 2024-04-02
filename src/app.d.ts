// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type DetailItem = {
		id: number;
		title: string;
		description: string;
		priceCents: number;
	};

	type FbDoc = { title: string; price: number };
	interface FbDocDesc extends FbDoc {
		description: string;
	}
}

export {};
