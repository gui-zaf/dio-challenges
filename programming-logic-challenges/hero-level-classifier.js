const heroName = 'Blue Pen';
let heroXp = 3724;
let tier = '';
let level = '';

if (heroXp < 1000) tier = 'Iron';
else if (heroXp <= 2000) tier = 'Bronze';
else if (heroXp <= 5000) tier = 'Silver';
else if (heroXp <= 7000) tier = 'Gold';
else if (heroXp <= 8000) tier = 'Platinum';
else if (heroXp <= 9000) tier = 'Ascendant';
else if (heroXp <= 10000) tier = 'Immortal';
else tier = 'Radiant';

level = Math.round(heroXp / 100);
console.log(`• The hero ${heroName} is ${tier} tier and level ${level}.`);