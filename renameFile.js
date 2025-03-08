import fs from "fs-extra";
import path from "path";
import sharp from "sharp";

// Accepted image formats
const validExtensions = [".png", ".jpg", ".jpeg"];

// Function to convert images to WebP
const convertToWebp = async (filePath) => {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const newFileName = `${baseName}-webp.webp`;
  const newFilePath = path.join(dir, newFileName);

  try {
    await sharp(filePath).toFormat("webp").toFile(newFilePath);
    console.log(`Converted: ${filePath} -> ${newFilePath}`);
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
};

// Recursive function to process all folders
const processDirectory = async (dir) => {
  const items = await fs.readdir(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath); // Recursively process subfolders
    } else if (validExtensions.includes(path.extname(fullPath).toLowerCase())) {
      await convertToWebp(fullPath); // Convert image
    }
  }
};

// Run the script
const main = async () => {
  const rootFolder = "./src/images"; // Change this to your main folder path
  await processDirectory(rootFolder);
};

main().catch(console.error);
