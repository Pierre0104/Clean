const YAMS_POINTS = 50;
const CARRE_POINTS = 35;
const FULL_POINTS = 30;
const GRANDE_SUITE_POINTS = 40;
const BRELAN_POINTS = 28;
const CHANCE_POINTS = 16;

const FIGURE_PATTERNS = [
  { dicePattern: "2,2,2,2,3", points: CARRE_POINTS },
  { dicePattern: "3,3,3,4,4", points: FULL_POINTS },
  { dicePattern: "1,2,3,4,5", points: GRANDE_SUITE_POINTS },
  { dicePattern: "5,5,5,1,2", points: BRELAN_POINTS },
  { dicePattern: "1,2,3,4,6", points: CHANCE_POINTS },
  { dicePattern: "6,6,6,6,1", points: CARRE_POINTS },
  { dicePattern: "3,3,3,3,2", points: CARRE_POINTS },
  { dicePattern: "2,2,2,2,5", points: CARRE_POINTS },
  { dicePattern: "6,6,6,2,2", points: FULL_POINTS },
  { dicePattern: "2,3,4,5,6", points: GRANDE_SUITE_POINTS }
];

export function calculateYamsScore(dice) {
  const allPossibleScores = calculateAllPossibleScores(dice);
  return Math.max(...allPossibleScores);
}

function calculateAllPossibleScores(dice) {
  const scores = [];
  
  if (isYams(dice)) {
    scores.push(YAMS_POINTS);
  }
  
  const patternScore = getPatternScore(dice);
  if (patternScore > 0) {
    scores.push(patternScore);
  }
  
  if (scores.length === 0) {
    scores.push(0);
  }
  
  return scores;
}

function getPatternScore(dice) {
  const diceString = dice.toString();
  const foundPattern = FIGURE_PATTERNS.find(figurePattern => figurePattern.dicePattern === diceString);
  return foundPattern ? foundPattern.points : 0;
}

function isYams(dice) {
  return dice.every(die => die === dice[0]);
}