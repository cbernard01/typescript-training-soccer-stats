import {MatchData} from "../matching/MatchData";
import {MatchResult} from "../matching/MatchResult";
import {AnalyzerImpl} from "../builders/interfaces/AnalyzerImpl";

export class WinsAnalysis implements AnalyzerImpl {
  team: string;

  constructor(team:string) {
    this.team = team;
  }

  run(matches: MatchData[]): string {
    const {team} = this;
    let wins: number = 0;

    for (let match of matches) {
      if (match[1] === team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `The team: ${team} won ${wins} games.`;
  }
}
