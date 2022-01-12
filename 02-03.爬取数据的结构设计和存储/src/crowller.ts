// ts -> .d.ts 翻译文件 @types/superagent -> js
import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import cheerio from 'cheerio';

interface Course {
  title: string;
  count: number;
}

interface CourseResult {
  time: number;
  data: Course[];
}

interface Content {
  [propName: number]: Course[];
}

class Crowller {
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find('.course-desc');
      const title = descs.eq(0).text();
      const count = parseInt(
        descs
          .eq(1)
          .text()
          .split('：')[1],
        10
      );
      courseInfos.push({ title, count });
    });
    return {
      time: new Date().getTime(),
      data: courseInfos
    };
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  // 将新爬取的内容进行存储
  generateJsonContent(courseInfo: CourseResult) {
    // 生成文件的绝对路径
    const filePath = path.resolve(__dirname, '../data/course.json');
    let fileContent: Content = {};
    // 判断文件是否存在，如果存在读取文件的内容
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }

  async initSpiderProcess() {
    const filePath = path.resolve(__dirname, '../data/course.json');
    // 爬取网页的html
    const html = await this.getRawHtml();
    // 提取需要的数据
    const courseInfo = this.getCourseInfo(html);
    // 将新爬取的内容合并
    const fileContent = this.generateJsonContent(courseInfo);
    // 将爬到的数据存储到json文件中
    fs.writeFileSync(filePath, JSON.stringify(fileContent));
  }

  constructor() {
    this.initSpiderProcess();
  }
}

const crowller = new Crowller();
