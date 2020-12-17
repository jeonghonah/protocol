import * as client from './js/client';
import * as server from './js/server';
import * as authClient from './js/auth-client';
import * as authServer from './js/auth-server';

import mapClient from './idmap/client.json';
import mapServer from './idmap/server.json';

import mapAuthClient from './idmap/auth-client.json';
import mapAuthServer from './idmap/auth-server.json';

let revMapServer = {};
let revMapClient = {};
let revMapAuthServer = {};
let revMapAuthClient = {};

mapClient.forEach((x, i) => (revMapClient[x] = i));
mapServer.forEach((x, i) => (revMapServer[x] = i));

mapAuthClient.forEach((x, i) => (revMapAuthClient[x] = i));
mapAuthServer.forEach((x, i) => (revMapAuthServer[x] = i));

export function parseToObject(pType, data) {
	let type = '';
	let packet: any;

	switch (pType) {
		case 'server':
			type = mapServer[data[0]];
			packet = server[type];
			break;
		case 'client':
			type = mapClient[data[0]];
			packet = client[type];
			break;
		case 'auth-server':
			type = mapAuthServer[data[0]];
			packet = authServer[type];
			break;
		case 'auth-client':
			type = mapAuthClient[data[0]];
			packet = authClient[type];
			break;
		default:
			return null;
	}

	if (type == undefined) return null;

	const rawData = data.slice(1);

	const message = packet.decode(rawData);

	let error: string | null = null;

	if (packet != undefined) error = packet.verify(message);
	else error = 'Invalid packet';

	if (error) {
		console.error('Invalid ' + pType + ' packet! Type: ' + type, error);
		return null;
	}

	return { data: packet.toObject(message, { defaults: true }), type: type };
}

export function parseToMessage(pType, type, data) {
	let packet: any;
	let typeRaw: number = 0;
	if (pType == 'server') {
		if (typeRaw == undefined) return null;
		packet = server[type];
	} else {
		typeRaw = revMapClient[type];
		if (typeRaw == undefined) return null;
		packet = client[type];
		pType = 'client';
	}

	switch (pType) {
		case 'server':
			typeRaw = revMapServer[type];
			packet = server[type];
			break;
		case 'client':
			typeRaw = revMapClient[type];
			packet = client[type];
			break;
		case 'auth-server':
			typeRaw = revMapAuthServer[type];
			packet = authServer[type];
			break;
		case 'auth-client':
			typeRaw = revMapAuthClient[type];
			packet = authClient[type];
			break;
		default:
			return null;
	}

	let error: string | null = null;

	if (packet != undefined) error = packet.verify(data);
	else error = 'Invalid packet';

	if (error) {
		console.error('Invalid ' + pType + ' packet! Type: ' + type, data, error);
		return null;
	}

	const message = packet.create(data);
	const encoded = packet.encode(message).finish();

	const out = new Uint8Array(1 + encoded.length);
	out.set([typeRaw]);
	out.set(encoded, 1);

	return out.buffer;
}
