function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function storeProfile(profile) {
  console.log("-== STORING PROFILE ==-");
  return localStorage.setItem("profile", JSON.stringify(profile));
}

function generateCharacter() {
  console.log("-== GENERATING PROFILE ==-");
  const profile = [
    {
      name: "Happiness",
      value: 100
    },
    {
      name: "Appearance",
      value: getRandomInt(30, 40)
    },
    {
      name: "Fitness",
      value: getRandomInt(30, 40)
    },
    {
      name: "Intelligence",
      value: getRandomInt(20, 80)
    },
    {
      name: "Musical",
      value: getRandomInt(10, 25)
    },
    {
      name: "Painting",
      value: getRandomInt(10, 25)
    },
    {
      name: "Social",
      value: getRandomInt(20, 80)
    }
  ];
  storeProfile(profile);
  return profile;
}

export { getRandomInt, generateCharacter };
