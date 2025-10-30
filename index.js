export function calculateYamsScore(dice) {

  if (dice.every(die => die === dice[0])) {
    return 50;
  }
  
  return 0;
}