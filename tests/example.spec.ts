import { test } from '@playwright/test';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

test('take screenshots', async ({ page }) => {
  const files = await readdir('public');
  for (const file of files)
    if (file.endsWith('.html')) {
      await page.goto(`/${file}`);
      await page.screenshot({ path: `public/${path.parse(file).name}.png` });
    }
});
