import { writeFile as Writeable, existsSync, mkdir } from "fs";
import { move } from "fs-extra";
import type { UserFileName } from "../types/FileNameTypes.js";
import { File } from "../main.js";

const nameSrc = "src" as UserFileName | string;
const nameJS = "js" as UserFileName | unknown;
const nameCSS = "css" as UserFileName | string;

function writeFileCreated(name: string) {
  Writeable(name, "", (err) => {
    if (err) {
      throw new Error("File" + name + " Not Created");
      console.log(err);
    }
  });
}

const htmlFileCreated = new File();
const jsFileCreated = new File();
const cssFileCreated = new File();

function GetDir(name: UserFileName | any) {
  mkdir(name, { recursive: true, mode: 0o777 }, (err) => {
    if (err) {
      throw new Error("File" + name + " Not Created");
      console.log(err);
    }

    console.log("[DIRECTORY CREATED]");
  });
}

GetDir(nameSrc);
GetDir(nameJS);
GetDir(nameCSS);

if (existsSync("main.html")) {
  const htmlMoveFile = `src/${htmlFileCreated.fileName("main.html")}`;
  writeFileCreated(`src/${htmlFileCreated}`);

  const htmlFile = htmlMoveFile;

  move(htmlFile, htmlMoveFile, { overwrite: true })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
}

if (existsSync("main.js")) {
  const jsMoveFile = `src/${jsFileCreated.fileName("main.js")}`;
  const jsFile = jsMoveFile;

  writeFileCreated(`js/${jsMoveFile}`);

  move(jsFile, jsMoveFile, { overwrite: true })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
}

if (existsSync("main.css")) {
  const cssMoveFile = `src/${jsFileCreated.fileName("main.css")}`;
  const cssFile = cssMoveFile;

  writeFileCreated(`css/${cssMoveFile}`);

  move(cssFile, cssMoveFile, { overwrite: true })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
}
