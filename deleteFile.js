import fs from "fs-extra";
import path from "path";

// Accepted image formats for deletion
const validExtensions = [".png", ".jpg", ".jpeg"];

// Recursive function to process and delete images
const deleteImages = async (dir) => {
  const items = await fs.readdir(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await deleteImages(fullPath); // Recursively process subfolders
    } else if (validExtensions.includes(path.extname(fullPath).toLowerCase())) {
      try {
        await fs.unlink(fullPath); // Delete the file
        console.log(`Deleted: ${fullPath}`);
      } catch (error) {
        console.error(`Error deleting ${fullPath}:`, error);
      }
    }
  }
};

// Run the script
const main = async () => {
  const rootFolder = "./src/images"; // Change this to your main folder path
  await deleteImages(rootFolder);
};

main().catch(console.error);
