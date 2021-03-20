import { pbjs, pbts } from 'protobufjs/cli';
import * as fs from 'fs';

pbjs.main(['--target', 'json', `./proto/types.proto`], function (err, outputType) {
	const types = JSON.parse(outputType);
	fs.readdir('proto', (err, data) => {
		data.forEach((x) => {
			if (!x.endsWith('.proto') || x.includes('types')) return;
			console.log(x);
			pbjs.main(['--target', 'static-module', `./proto/${x}`, `./proto/types.proto`], function (err, output) {
				if (err) throw err;

				const name = x.replace('.proto', '');

				fs.writeFileSync(`./js/${name}.js`, output);

				pbts.main([`./js/${name}.js`], function (err, output) {
					if (err) throw err;

					fs.writeFileSync(`./js/${name}.d.ts`, output);
				});
			});
			pbjs.main(['--target', 'json', `./proto/${x}`, `./proto/types.proto`], function (err, output) {
				if (err) throw err;

				const name = x.replace('.proto', '');

				fs.writeFileSync(`./json/${name}.json`, output);

				const obj = JSON.parse(output);

				const keys = [];
				for (const x in obj.nested) {
					if (!types.nested[x]) {
						keys.push(x);
					}
				}
				const byname = {};

				keys.forEach((v, i) => (byname[v] = i));
				fs.writeFileSync(`./idmap/${name}.json`, JSON.stringify(keys));
				fs.writeFileSync(`./idmap/${name}-byname.json`, JSON.stringify(byname));
			});
		});
	});
});
