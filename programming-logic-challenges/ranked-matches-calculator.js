const winrate = getWinrate(90, 20);
const rank = getRank(winrate);

function getWinrate(wins, losses) {
  const winrate = wins - losses;
  return winrate;
}

function getRank(winrate) {
  let rank = "";
  if (winrate < 10) rank = "Iron";
  else if (winrate <= 20) rank = "Bronze";
  else if (winrate <= 50) rank = "Silver";
  else if (winrate <= 80) rank = "Gold";
  else if (winrate <= 90) rank = "Diamond";
  else if (winrate <= 100) rank = "Legendary";
  else rank = "Imortal";
  return rank;
}

console.log(`The hero has a winrate of ${winrate} and the ranking is ${rank}.`);