import { generateYear, storeYear } from "./utils";
async function fetchYears() {
  console.log("-== FETCHING YEARS ==-");
  const years = JSON.parse(await localStorage.getItem("years")) || [];
  console.log("-== FETCHED YEARS ==-");
  const year = generateYear(years.length);
  years.push(year);
  storeYear(years);
  return years;
}

export { fetchYears };
