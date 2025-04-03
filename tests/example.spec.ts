import { test } from "@playwright/test";
import { opendir } from "node:fs/promises";
import path from "node:path";

async function readDirRecursively(
  baseDir: string,
  dir: string,
  callback: (dirExceptBaseDir: string, path: string) => Promise<void>
) {
  const dirHandle = await opendir(dir);

  for await (const dirent of dirHandle) {
    const currentPath = `${dir}/${dirent.name}`;
    const dirExceptBaseDir = currentPath.replace(baseDir, "");
    await callback(dirExceptBaseDir, currentPath);

    if (dirent.isDirectory()) {
      await readDirRecursively(baseDir, currentPath, callback);
    }
  }
}

test("take screenshots", async ({ page }) => {
  await readDirRecursively(
    "public",
    "public",
    async (dirExceptBaseDir, currentPath) => {
      if (currentPath.endsWith(".html")) {
        await page.goto(dirExceptBaseDir);
        const savePath = `${path.parse(currentPath).dir}/${
          path.parse(currentPath).name
        }.png`;
        await page.screenshot({
          path: savePath,
        });
      }
    }
  );
});
