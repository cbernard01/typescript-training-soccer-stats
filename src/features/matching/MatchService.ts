import {DataReader} from "../db/interfaces/DataReaderImp";
import {dateStringToDate} from "../db/dataParseService";
import {MatchResult} from "./MatchResult";
import {MatchData} from "./MatchData";
import {CSVFileService} from "../db/classes/CSVFileService";

export class MatchService {
  reader: DataReader;
  matches: MatchData[] = [];

  constructor(reader: DataReader) {
    this.reader = reader;
  }

  static serviceWithCSVFileServiceWithLoading(filename: string): MatchService {
    const matchService = new MatchService(new CSVFileService(filename));
    matchService.load();
    return matchService;
  }

  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    });
  }
}

