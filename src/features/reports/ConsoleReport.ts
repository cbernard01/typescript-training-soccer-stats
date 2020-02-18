import {OutPutTargetImpl} from "../builders/interfaces/OutPutTargetImpl";

export class ConsoleReport implements OutPutTargetImpl {
  print(report: string): void {
    console.log(report);
  }
}
