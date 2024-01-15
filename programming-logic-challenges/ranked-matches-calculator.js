const winrate = getWinrate(90, 20);
const tier = getRank(winrate);

function getWinrate(wins, losses) {
  const winrate = wins - losses;
  return winrate;
}

function getRank(winrate) {
  let tier = "";
  if (winrate < 10) tier = "Iron";
  else if (winrate <= 20) tier = "Bronze";
  else if (winrate <= 50) tier = "Silver";
  else if (winrate <= 80) tier = "Gold";
  else if (winrate <= 90) tier = "Diamond";
  else if (winrate <= 100) tier = "Legendary";
  else tier = "Imortal";
  return tier;
}

console.log(`The hero has a winrate of ${winrate} and the tier is ${tier}.`);