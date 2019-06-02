const fs = require("fs");
const path = require("path");

module.exports = (req, err) => {
	fs.appendFile(
		path.join(path.dirname(require.main.filename), "log.txt"),
		req.ip + "\t" + req.method + " " + req.originalUrl + "\t" + err + "\n",
		() => {}
	);
};
