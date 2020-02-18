import fs from "fs";
import {OutPutTargetImpl} from "../builders/interfaces/OutPutTargetImpl";

export class HTMLReport implements OutPutTargetImpl {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;
    fs.writeFileSync("build/report.html", html);
  }
}
