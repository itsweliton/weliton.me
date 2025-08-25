#!/usr/bin/env node

/**
 * Image Optimization Script for Photography Page
 *
 * This script helps optimize images for web use by:
 * 1. Converting to WebP format
 * 2. Creating multiple sizes for responsive images
 * 3. Compressing images while maintaining quality
 *
 * Usage: node scripts/optimize-images.js
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Configuration
const config = {
  inputDir: 'src/assets/images/photos',
  outputDir: 'public/optimized-photos',
  sizes: [400, 800, 1200, 1600], // Image sizes to generate
  quality: 80, // WebP quality (0-100)
  formats: ['webp', 'jpg'], // Output formats
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, size, format) {
  try {
    const image = sharp(inputPath);

    if (format === 'webp') {
      await image
        .resize(size, null, { withoutEnlargement: true })
        .webp({ quality: config.quality })
        .toFile(outputPath);
    } else if (format === 'jpg') {
      await image
        .resize(size, null, { withoutEnlargement: true })
        .jpeg({ quality: config.quality })
        .toFile(outputPath);
    }

    console.log(`✅ Generated: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

async function processImages() {
  try {
    const files = fs.readdirSync(config.inputDir);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

    console.log(`🎯 Found ${imageFiles.length} images to optimize`);

    for (const file of imageFiles) {
      const inputPath = path.join(config.inputDir, file);
      const baseName = path.parse(file).name;

      for (const size of config.sizes) {
        for (const format of config.formats) {
          const outputFileName = `${baseName}-${size}w.${format}`;
          const outputPath = path.join(config.outputDir, outputFileName);

          await optimizeImage(inputPath, outputPath, size, format);
        }
      }
    }

    console.log('🎉 Image optimization complete!');
    console.log(`📁 Optimized images saved to: ${config.outputDir}`);
  } catch (error) {
    console.error('❌ Error processing images:', error.message);
  }
}

// Run the script
processImages();

