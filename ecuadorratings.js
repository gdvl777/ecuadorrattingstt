function calculateRatingChange(higherRatedPlayer, lowerRatedPlayer, higherRatedPlayerWins) {
let pointSpread = higherRatedPlayer - lowerRatedPlayer;
let expectedResult;
let upsetResult;
if (pointSpread >= 0 && pointSpread <= 12) {
expectedResult = 8;
upsetResult = 8;
} else if (pointSpread >= 13 && pointSpread <= 37) {
expectedResult = 7;
upsetResult = 10;
} else if (pointSpread >= 38 && pointSpread <= 62) {
expectedResult = 6;
upsetResult = 13;
} else if (pointSpread >= 63 && pointSpread <= 87) {
expectedResult = 5;
upsetResult = 16;
} else if (pointSpread >= 88 && pointSpread <= 112) {
expectedResult = 4;
upsetResult = 20;
} else if (pointSpread >= 113 && pointSpread <= 137) {
expectedResult = 3;
upsetResult = 25;
} else if (pointSpread >= 138 && pointSpread <= 162) {
expectedResult = 2;
upsetResult = 30;
} else if (pointSpread >= 163 && pointSpread <= 187) {
expectedResult = 2;
upsetResult = 35;
} else if (pointSpread >= 188 && pointSpread <= 212) {
expectedResult = 1;
upsetResult = 40;
} else if (pointSpread >= 213 && pointSpread <= 237) {
expectedResult = 1;
upsetResult = 45;
} else {
expectedResult = 0;
upsetResult = 50;
}
if (higherRatedPlayerWins) {
return [higherRatedPlayer+=expectedResult, lowerRatedPlayer-=expectedResult];
} else {
return [higherRatedPlayer-=upsetResult, lowerRatedPlayer+=upsetResult];
}
}
