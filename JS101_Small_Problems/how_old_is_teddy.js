const randowmBetween = (min, max) => {
  if (min < max) return Math.floor(Math.random() * (max - min) + min);
};

console.log(randowmBetween(20, 120));
