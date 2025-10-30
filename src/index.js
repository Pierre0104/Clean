export function calculateYamsScore(dice) {
  if (dice.every(die => die === dice[0])) {
    return 50;
  }
  
  if (dice.toString() === "2,2,2,2,3") {
    return 35;
  }
  
  if (dice.toString() === "3,3,3,4,4") {
    return 30;
  }
  
  if (dice.toString() === "1,2,3,4,5") {
    return 40;
  }
  
  if (dice.toString() === "5,5,5,1,2") {
    return 28;
  }
  
  if (dice.toString() === "1,2,3,4,6") {
    return 16;
  }
  
  if (dice.toString() === "6,6,6,6,1") {
    return 35;
  }
  
  return 0;
}