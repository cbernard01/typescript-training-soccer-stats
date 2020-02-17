import {CSVFileService} from "./features/db/CSVFileService";
import {MatchResult} from "./features/db/MatchResult";

const matches = new CSVFileService("data/data.csv").read();
let manUnitedWins: number = 0;

for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
