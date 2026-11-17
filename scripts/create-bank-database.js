const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "../data/IFSC.csv");
const outputFile = path.join(__dirname, "../data/bank_branches_clean.csv");

const csv = fs.readFileSync(inputFile, "utf8");

const lines = csv.split("\n");

const header = lines[0].split(",");

const index = {
    BANK: header.indexOf("BANK"),
    IFSC: header.indexOf("IFSC"),
    BRANCH: header.indexOf("BRANCH"),
    DISTRICT: header.indexOf("DISTRICT"),
    STATE: header.indexOf("STATE"),
    ADDRESS: header.indexOf("ADDRESS"),
    MICR: header.indexOf("MICR"),
};

const output = [];

output.push(
    "bank_name,state,district,branch_name,ifsc_code,micr_code,address"
);

for (let i = 1; i < lines.length; i++) {

    if (!lines[i].trim()) continue;

    const row = lines[i].split(",");

    output.push([
        `"${row[index.BANK] || ""}"`,
        `"${row[index.STATE] || ""}"`,
        `"${row[index.DISTRICT] || ""}"`,
        `"${row[index.BRANCH] || ""}"`,
        `"${row[index.IFSC] || ""}"`,
        `"${row[index.MICR] || ""}"`,
        `"${row[index.ADDRESS] || ""}"`
    ].join(","));
}

fs.writeFileSync(outputFile, output.join("\n"));

console.log("Done");
console.log(outputFile);