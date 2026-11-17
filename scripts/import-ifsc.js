require("dotenv").config({ path: ".env.local" });

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

const csvFile = path.join(__dirname, "IFSC.csv");

const batchSize = 1000;

let rows = [];
let imported = 0;

console.log("==================================");
console.log("IFSC Import Started");
console.log("==================================");

fs.createReadStream(csvFile)
    .pipe(csv())
    .on("data", async (row) => {

        rows.push({
            bank: row.BANK,
            ifsc: row.IFSC,
            branch: row.BRANCH,
            centre: row.CENTRE,
            district: row.DISTRICT,
            state: row.STATE,
            address: row.ADDRESS,
            contact: row.CONTACT,
            imps: row.IMPS,
            rtgs: row.RTGS,
            city: row.CITY,
            iso3166: row.ISO3166,
            neft: row.NEFT,
            micr: row.MICR,
            upi: row.UPI,
            swift: row.SWIFT
        });

        if (rows.length >= batchSize) {

            const batch = rows;
            rows = [];

            const { error } = await supabase
                .from("bank_branches")
                .insert(batch);

            if (error) {

                console.error(error);

            } else {

                imported += batch.length;

                console.log(
                    `Imported ${imported} records`
                );

            }

        }

    })

     .on("end", async () => {

        if (rows.length > 0) {

            const { error } = await supabase
                .from("bank_branches")
                .insert(rows);

            if (error) {

                console.error(error);

            } else {

                imported += rows.length;

            }

        }

        console.log("==================================");
        console.log("Import Completed");
        console.log("Total Imported:", imported);
        console.log("==================================");

    });