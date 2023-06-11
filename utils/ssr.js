import fs from "fs";
import { join } from "path";
import yaml from "yaml";

export const DATA_FILES_REGEX = /\.(md|yml)?$/;
export const COURSE_PATH = join(process.cwd(), "data/courses");

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
  return yaml.parse(fileContents);
};
