import { generateCharacter } from "./utils";

async function fetchProfile() {
  console.log("-== FETCHING PROFILE ==-");
  const profile =
    JSON.parse(await localStorage.getItem("profile")) || generateCharacter();
  console.log("-== FETCHED PROFILE ==-");
  return profile;
}

export { fetchProfile };
