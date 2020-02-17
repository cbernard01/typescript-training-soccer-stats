import {MatchResult} from "./features/matching/MatchResult";
import {MatchService} from "./features/matching/MatchService";
import {CSVFileService} from "./features/db/classes/CSVFileService";

const csvFileService = new CSVFileService("data/data.csv");
const matchService = new MatchService(csvFileService);
matchService.load();
let manUnitedWins: number = 0;

for (let match of matchService.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
