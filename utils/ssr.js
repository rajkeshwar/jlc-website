import fs from "fs";
import * as matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";
import yaml from "yaml";
import { titleSlugify } from "./common";

export const DATA_FILES_REGEX = /\.(md|yml)?$/;
export const COURSE_PATH = join(process.cwd(), "data/courses");

export const API_URL = 'http://localhost:3004';

export const getFilePaths = (sourceDir = "courses") => {
  const dirPath = join(process.cwd(), "data", sourceDir);

  const filePaths = fs
    .readdirSync(dirPath)
    // Match only given file extensions
    .filter((path) => DATA_FILES_REGEX.test(path))
    // Remove file extensions for page paths
    .map((path) => path.replace(DATA_FILES_REGEX, ""));

  return filePaths;
};

export const getFileContent = (filePath) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.parseAllDocuments(fileContents);
};

let cachedBlogs = [];

export const getAllBlogs = async () => {
  if (cachedBlogs.length > 0) return cachedBlogs;

  const blogs = [];

  for await (let slug of getFilePaths("blogs")) {
    const fullPath = join("data", "blogs", `${slug}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContent);

    // Use remark to convert markdown into HTML string
    const remarkResp = await remark().use(html).process(content);
    const htmlContent = remarkResp.toString();

    // Combine the data with the id and contentHtml
    blogs.push({
      routeLink: titleSlugify(data.title),
      filePath: slug,
      htmlContent,
      ...data,
    });
  }

  cachedBlogs = blogs;

  console.log("fetching blogs ....");

  return blogs;
};


let cachedCourses = [];

export const getAllCourses = async () => {
  if (cachedCourses.length > 0) return cachedCourses;

  const courses = [];

  for await (let slug of getFilePaths("courses")) {
    const fullPath = join("data", "courses", `${slug}.yml`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContent);

    // Use remark to convert markdown into HTML string
    const remarkResp = await remark().use(html).process(content);
    const htmlContent = remarkResp.toString();

    // Combine the data with the id and contentHtml
    courses.push({
      routeLink: titleSlugify(data.name),
      filePath: slug,
      htmlContent,
      ...data,
    });
  }

  cachedCourses = courses;

  console.log("fetching courses ....");

  return courses;
};

