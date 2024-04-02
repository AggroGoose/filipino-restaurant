import { db } from '$lib/api/firebase';
import { collection, getDocs } from 'firebase/firestore';

import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
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
	const dessert: FbDoc[] = [];
	const dessertReq = await getDocs(collection(db, 'dessert'));
	dessertReq.forEach((doc) => {
		dessert.push(doc.data() as FbDoc);
	});

	return json({ mami, pancit, lumpia, drinks, dessert });
};
