import fs from "fs";

interface Logger {
	info: (message: string) => void;
	log: (...message: any[]) => void;
	warn: (...message: any[]) => void;
	error: (...message: any[]) => void;
}

function getLogger(filePath?: string): Logger {
	let writeStream: fs.WriteStream = null;

	if (filePath) {
		writeStream = fs.createWriteStream(filePath, { flags: "a" });
		writeStream.write(`Logger initialized at ${new Date().toISOString()}\n`);
	}

	function log(header: string, message: any[]) {
		if (!writeStream) return;

		const formattedMessage = message.map(m => (typeof m === "object" ? JSON.stringify(m, null, 2) : m)).join(" ");
		writeStream.write(`${header}${formattedMessage}\n`);
	}

	const logObject = {
		info: (message: string) => logObject.log(message),
		log: (...message: any[]) => {
			const header = `[${new Date().toISOString()}][INFO] `;
			log(header, message);
			console.log(header, ...message);
		},
		warn: (...message: any[]) => {
			const header = `[${new Date().toISOString()}][WARN] `;
			log(header, message);
			console.warn(header, ...message);
		},
		error: (...message: any[]) => {
			const header = `[${new Date().toISOString()}][ERROR] `;
			log(header, message);
			console.error(header, ...message);
		}
	};

	return logObject;
}

export { getLogger, Logger };
