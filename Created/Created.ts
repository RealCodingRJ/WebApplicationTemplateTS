import { writeFile as Writeable, existsSync, mkdir } from "fs";

export default function CreateGitignore(name: string) {
  Writeable(name, "", (err) => {
    if (err) {
      throw new Error("File" + name + " Not Created");
      console.log(err);
    }

    console.log("Created: " + name);
  });
}
