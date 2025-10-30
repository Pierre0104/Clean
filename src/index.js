export function calculateYamsScore(dice) {
  if (dice.every(die => die === dice[0])) {
    return 50;
  }
  
  const figurePatterns = [
    { dicePattern: "2,2,2,2,3", points: 35 },
    { dicePattern: "3,3,3,4,4", points: 30 },
    { dicePattern: "1,2,3,4,5", points: 40 },
    { dicePattern: "5,5,5,1,2", points: 28 },
    { dicePattern: "1,2,3,4,6", points: 16 },
    { dicePattern: "6,6,6,6,1", points: 35 }
  ];
  
  const diceString = dice.toString();
  const foundPattern = figurePatterns.find(figurePattern => figurePattern.dicePattern === diceString);
  
  if (foundPattern) {
    return foundPattern.points;
  }
  
  return 0;
}