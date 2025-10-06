import type FileNameTypes = require("./types/FileNameTypes");

const fileNameByUser = { name: "App.ts" } as FileNameTypes.UserFileName;

interface FileName {
  fileName(fileName: string): void;
}

export class File implements FileName {
  fileName(filesName: string) {
    console.log("File Created: ", filesName);
    console.log("WELCOME: Ryan James");
  }
}
