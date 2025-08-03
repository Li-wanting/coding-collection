import fs from "fs";
import path from "path";

class ChapterSplitter {
  #text = null;
  #pattern = /^第.{1,9}[章回节].*$/gm;
  constructor(filePath) {
    if (!fs.existsSync(filePath)) {
      throw new Error("文件不存在:" + filePath);
    }

    const buffer = fs.readFileSync(filePath);
    this.#text = buffer.toString("utf-8");
  }

  split = () => {
    const chapters = [];

    const matches = [...this.#text.matchAll(this.#pattern)];

    console.log('this.#text',this.#text);
    console.log('matches',matches);
    

    for (let i = 0; i < matches.length; i++) {
      const chapter = matches[i];
      const start = chapter.index;
      const end = matches[i + 1]?.index || this.#text.length;

      const title = chapter[0].trim();

      const content = this.#text.slice(start + title.length, end).trim();
      chapters.push({
        title,
        content,
      });
    }
    return chapters;
  };

  saveChapters = (outputDir) => {
    const chapters = this.split();
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

    chapters.forEach((chapter, index) => {
      const fileName = `chapter${index + 1}.txt`;

      fs.writeFileSync(
        path.join(outputDir, fileName),
        `${chapter.title}\n\n${chapter.content}`
      );
    });

    console.log(`共保存${chapters.length}个章节到${outputDir}文件夹`);
  };
}

export default ChapterSplitter;
