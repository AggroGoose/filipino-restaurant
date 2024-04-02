import { db } from '$lib/api/firebase';
import { collection, getDocs } from 'firebase/firestore';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const mami: FbDocDesc[] = [];
	const mamiReq = await getDocs(collection(db, 'mami'));
	mamiReq.forEach((doc) => {
		mami.push(doc.data() as FbDocDesc);
	});
	const pancit: FbDocDesc[] = [];
	const pancitReq = await getDocs(collection(db, 'pancit'));
	pancitReq.forEach((doc) => {
		pancit.push(doc.data() as FbDocDesc);
	});
	const lumpia: FbDoc[] = [];
	const lumpiaReq = await getDocs(collection(db, 'lumpia'));
	lumpiaReq.forEach((doc) => {
		lumpia.push(doc.data() as FbDoc);
	});
	const drinks: FbDoc[] = [];
	const drinksReq = await getDocs(collection(db, 'drinks'));
	drinksReq.forEach((doc) => {
		drinks.push(doc.data() as FbDoc);
	});
	const desserts: FbDoc[] = [];
	const dessertReq = await getDocs(collection(db, 'dessert'));
	dessertReq.forEach((doc) => {
		desserts.push(doc.data() as FbDoc);
	});

	return {
		mami,
		pancit,
		lumpia,
		drinks,
		desserts
	};
}
