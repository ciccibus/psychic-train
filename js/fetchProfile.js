import { generateCharacter } from "./utils";

async function fetchProfile() {
  const profile = await localStorage.getItem("profile");
  return generateCharacter();
}

export { fetchProfile };
