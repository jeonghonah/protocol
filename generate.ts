import { pbjs, pbts } from 'protobufjs/cli';
import * as fs from 'fs';

fs.readdir('proto', (err, data) => {
	data.forEach((x) => {
		if (!x.endsWith('.proto')) return;
		pbjs.main(['--target', 'static-module', `./proto/${x}`], function (err, output) {
			if (err) throw err;

			const name = x.replace('.proto', '');

			fs.writeFileSync(`./js/${name}.js`, output);

			pbts.main([`./js/${name}.js`], function (err, output) {
				if (err) throw err;
		
				fs.writeFileSync(`./js/${name}.d.ts`, output);
			});
		});
		pbjs.main(['--target', 'json', `./proto/${x}`], function (err, output) {
			if (err) throw err;

			const name = x.replace('.proto', '');

			fs.writeFileSync(`./json/${name}.json`, output);
		});
	});
});
