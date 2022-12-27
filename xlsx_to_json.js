import { readFile, utils } from 'xlsx';
const workbook = readFile('RankingEc.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = utils.sheet_to_json(sheet, {header: 1});
const jsonString = JSON.stringify(data);
const fs = require('fs');

fs.writeFileSync('playerCollection.json', jsonString);
