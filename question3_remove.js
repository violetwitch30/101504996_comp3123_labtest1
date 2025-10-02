const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach(file => {
        fs.unlinkSync(path.join(logsDir, file));
        console.log(`Deleted file: ${file}`);
    });

    fs.rmdirSync(logsDir);
    console.log("Logs directory removed.");

} else {
    console.log("Logs directory does not exist.");
}