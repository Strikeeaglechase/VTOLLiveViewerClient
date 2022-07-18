const obj2gltf = require("obj2gltf");
const fs = require("fs");

function loadAll() {
	const files = fs.readdirSync("../");

	files.forEach(file => {
		if (!file.endsWith(".obj")) return;
		let name = file.substring(0, file.indexOf("."));
		obj2gltf(`../${file}`).then(function (gltf) {
			const data = Buffer.from(JSON.stringify(gltf));
			fs.writeFileSync(`./${name}.gltf`, data);
		}).catch((e) => console.log(e.message));
	});
}

async function test() {
	const files = fs.readdirSync("../");
	const out = fs.readdirSync("./");
	files.forEach(file => {
		const name = file.substring(0, file.indexOf("."));
		if (!out.includes(`${name}.gltf`)) console.log(name);
	});
	// const obj = await obj2gltf(`../vtolvr_SamBattery1.obj`);
	// console.log(obj);
}

test();