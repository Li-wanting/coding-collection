import ChapterSplitter from "./chapterSplit.js";

const chapterSplitter= new ChapterSplitter('./text.txt')

const chapters =  chapterSplitter.split();
console.log('chapters',chapters);
chapterSplitter.saveChapters('output')
