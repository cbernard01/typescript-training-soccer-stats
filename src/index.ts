import {MatchService} from "./features/matching/MatchService";
import {Builder} from "./features/builders/Builder";

const matchService = MatchService.serviceWithCSVFileServiceWithLoading("data/data.csv");
const builder1 = Builder.winsAnalysisWithHTMLReport("Southampton");

builder1.buildAndPrintReport(matchService.matches);
