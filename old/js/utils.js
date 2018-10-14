function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInDom(selector) {
  return document.querySelectorAll(selector).length;
}

function storeProfile(profile) {
  console.log("-== STORING PROFILE ==-");
  return localStorage.setItem("profile", JSON.stringify(profile));
}

function storeYear(year) {
  console.log("-== STORING Years ==-");
  return localStorage.setItem("years", JSON.stringify(year));
}

function toggleCssClass(param, className) {
  if (param instanceof HTMLElement) {
    return param.classList.toggle(className);
  }
  return [...document.querySelectorAll(param)].forEach(element => {
    element.classList.toggle(className);
  });
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

function generateYear(yearsLength) {
  console.log("-== GENERATING YEAR ==-");
  const year = {
    year: new Date().getFullYear() + yearsLength,
    activities: ["buy milk", "buy cereal"]
  };

  return year;
}

export {
  getRandomInt,
  generateCharacter,
  isInDom,
  toggleCssClass,
  generateYear,
  storeYear
};
