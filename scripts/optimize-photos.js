import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PHOTOS_DIR = 'public/photos';
const OPTIMIZED_DIR = 'public/photos/optimized';

// Create optimized directory if it doesn't exist
await fs.mkdir(OPTIMIZED_DIR, { recursive: true });

async function optimizePhotos() {
  try {
    const files = await fs.readdir(PHOTOS_DIR);
    const imageFiles = files.filter(
      file =>
        /\.(jpg|jpeg|png|arw)$/i.test(file) &&
        !file.includes('optimized') &&
        !file.includes('Enhanced')
    );

    console.log(`Found ${imageFiles.length} photos to optimize`);

    for (const file of imageFiles) {
      const inputPath = path.join(PHOTOS_DIR, file);
      const baseName = path.parse(file).name;

      console.log(`Processing ${file}...`);

      try {
        // Generate thumbnail (200x200, WebP)
        await sharp(inputPath)
          .resize(200, 200, { fit: 'cover' })
          .webp({ quality: 80 })
          .toFile(path.join(OPTIMIZED_DIR, `${baseName}-thumb.webp`));

        // Generate small version (800x800, WebP)
        await sharp(inputPath)
          .resize(800, 800, { fit: 'inside' })
          .webp({ quality: 85 })
          .toFile(path.join(OPTIMIZED_DIR, `${baseName}-small.webp`));

        // Generate medium version (1200x1200, WebP)
        await sharp(inputPath)
          .resize(1200, 1200, { fit: 'inside' })
          .webp({ quality: 90 })
          .toFile(path.join(OPTIMIZED_DIR, `${baseName}-medium.webp`));

        // Generate optimized full version (WebP, reduced quality)
        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(path.join(OPTIMIZED_DIR, `${baseName}-full.webp`));

        console.log(`✅ Optimized ${file}`);
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }

    console.log('🎉 Photo optimization complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

optimizePhotos();

