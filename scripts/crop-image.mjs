#!/usr/bin/env node
/**
 * Crop an image from two sides (left and right, or top and bottom).
 * Usage:
 *   node scripts/crop-image.mjs <input> [options]
 *
 * Options:
 *   --left <px>       Pixels to remove from left (default: 0)
 *   --right <px>      Pixels to remove from right (default: 0)
 *   --top <px>        Pixels to remove from top (default: 0)
 *   --bottom <px>     Pixels to remove from bottom (default: 0)
 *   --output <path>   Output path (default: overwrites input)
 *
 * Example: node scripts/crop-image.mjs public/assets/images/bhavik-profile.png --left 50 --right 50
 */

import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  const input = args.find((a) => !a.startsWith('--'));
  const getOpt = (name) => {
    const i = args.indexOf(name);
    return i !== -1 && args[i + 1] != null ? parseInt(args[i + 1], 10) : 0;
  };
  const getStr = (name) => {
    const i = args.indexOf(name);
    return i !== -1 && args[i + 1] != null ? args[i + 1] : null;
  };
  return {
    input: input ? resolve(root, input) : null,
    left: getOpt('--left'),
    right: getOpt('--right'),
    top: getOpt('--top'),
    bottom: getOpt('--bottom'),
    output: getStr('--output') ? resolve(root, getStr('--output')) : null,
  };
}

async function cropImage(inputPath, { left = 0, right = 0, top = 0, bottom = 0 }, outputPath) {
  const meta = await sharp(inputPath).metadata();
  const { width, height } = meta;

  const cropLeft = Math.min(left, width - 1);
  const cropRight = Math.min(right, width - cropLeft - 1);
  const cropTop = Math.min(top, height - 1);
  const cropBottom = Math.min(bottom, height - cropTop - 1);

  const newWidth = width - cropLeft - cropRight;
  const newHeight = height - cropTop - cropBottom;

  if (newWidth < 1 || newHeight < 1) {
    throw new Error('Crop values would result in zero or negative dimensions.');
  }

  const out = outputPath || inputPath;
  await sharp(inputPath)
    .extract({
      left: cropLeft,
      top: cropTop,
      width: newWidth,
      height: newHeight,
    })
    .toFile(out);

  console.log(
    `Cropped: ${width}x${height} → ${newWidth}x${newHeight} (left: ${cropLeft}, right: ${cropRight}, top: ${cropTop}, bottom: ${cropBottom})`
  );
  console.log(`Saved: ${out}`);
}

const opts = parseArgs();
if (!opts.input || !existsSync(opts.input)) {
  console.error('Usage: node scripts/crop-image.mjs <input> [--left px] [--right px] [--top px] [--bottom px] [--output path]');
  process.exit(1);
}

cropImage(opts.input, opts, opts.output).catch((err) => {
  console.error(err);
  process.exit(1);
});
