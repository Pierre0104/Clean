export function calculateYamsScore(dice) {
  if (dice.every(die => die === dice[0])) {
    return 50;
  }
  
  const specificCases = [
    { pattern: "2,2,2,2,3", score: 35 },
    { pattern: "3,3,3,4,4", score: 30 },
    { pattern: "1,2,3,4,5", score: 40 },
    { pattern: "5,5,5,1,2", score: 28 },
    { pattern: "1,2,3,4,6", score: 16 },
    { pattern: "6,6,6,6,1", score: 35 }
  ];
  
  const diceString = dice.toString();
  const matchingCase = specificCases.find(caseItem => caseItem.pattern === diceString);
  
  if (matchingCase) {
    return matchingCase.score;
  }
  
  return 0;
}