function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCharacter() {
  return [
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
}

export { getRandomInt, generateCharacter };
