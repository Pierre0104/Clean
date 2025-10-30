const YAMS_POINTS = 50;
const CARRE_POINTS = 35;
const FULL_POINTS = 30;
const GRANDE_SUITE_POINTS = 40;
const BRELAN_POINTS = 28;

const FIGURE_PATTERNS = [
  { dicePattern: "2,2,2,2,3", points: CARRE_POINTS },
  { dicePattern: "3,3,3,4,4", points: FULL_POINTS },
  { dicePattern: "1,2,3,4,5", points: GRANDE_SUITE_POINTS },
  { dicePattern: "5,5,5,1,2", points: BRELAN_POINTS },
  { dicePattern: "1,2,3,4,6", points: 16 },
  { dicePattern: "6,6,6,6,1", points: CARRE_POINTS }
];

export function calculateYamsScore(dice) {
  if (isYams(dice)) {
    return YAMS_POINTS;
  }
  
  const diceString = dice.toString();
  const foundPattern = FIGURE_PATTERNS.find(figurePattern => figurePattern.dicePattern === diceString);
  
  if (foundPattern) {
    return foundPattern.points;
  }
  
  return 0;
}

function isYams(dice) {
  return dice.every(die => die === dice[0]);
}