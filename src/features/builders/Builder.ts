import {AnalyzerImpl} from "./interfaces/AnalyzerImpl";
import {OutPutTargetImpl} from "./interfaces/OutPutTargetImpl";
import {MatchData} from "../matching/MatchData";
import {WinsAnalysis} from "../analyzers/WinsAnalysis";
import {HTMLReport} from "../reports/HTMLReport";


export class Builder {
  analyzer: AnalyzerImpl;
  outputTarget: OutPutTargetImpl;

  constructor(analyzer: AnalyzerImpl, outputTarget: OutPutTargetImpl) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }

  static winsAnalysisWithHTMLReport(team: string): Builder {
    return new Builder(new WinsAnalysis(team), new HTMLReport());
  }

  buildAndPrintReport(matches: MatchData[]) {
    this.outputTarget.print(this.analyzer.run(matches));
  }
}
