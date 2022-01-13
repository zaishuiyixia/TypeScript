import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
// import LeeAnalyzer from './leeAnalyzer';
import DeeAnalyzer from './dellAnalyzer';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
  // analyze(html: string, filePath: string): string;
}
// Crowller主要负责读取html内容、存文件这种爬虫通用的步骤，至于拿到内容具体分析提取存储数据的过程不同的爬虫需求不同，所以这部分逻辑抽离出去放到单独的文件中
// 所以针对之前的爬虫代码可以拆分成两部分：
//   1: 通用的Crowller部分
//   2: 专门爬对应网址的爬取策略dellAnalyzer和lellAnalyzer
// 这样拆分的好处是之前的爬虫代码只能爬取特定url的网页定制型太强，拆分后如果需要爬其他地方的网页如lellAnalyzer需求是存储html内容即可，
// 只需要将具体的分析逻辑单独抽离出其他文件中即可
class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');

  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

// const analyzer = new LeeAnalyzer();
const analyzer = new DeeAnalyzer();
new Crowller(url, analyzer);
