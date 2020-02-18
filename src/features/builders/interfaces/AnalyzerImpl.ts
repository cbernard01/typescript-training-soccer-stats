import {MatchData} from "../../matching/MatchData";

export interface AnalyzerImpl {
  run(matches: MatchData[]): string;
}
