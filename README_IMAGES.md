# Adding Project Images

## Current Status
✅ Footer links updated with your information:
- LinkedIn: https://www.linkedin.com/in/jonathanischneider/
- GitHub: https://github.com/jschnei3-s
- Email: yoniyschneider@gmail.com
- Photography: https://jsphotography629.squarespace.com/
- Resume: /resume.pdf (needs to be added)

## Project Images Needed

You mentioned you have images for each project. Please save them to `/public/images/` with these exact filenames:

1. **AI Journaling App**
   - Save as: `ai-journal.jpg` (or `.png`, `.webp`)
   - Current path in code: `/images/placeholder.svg`
   - Description: Login screen with "AI Journaling" title and "Sign in with Google" button

2. **Task / Productivity App**
   - Save as: `task-app.jpg` (or `.png`, `.webp`)
   - Current path in code: `/images/placeholder.svg`
   - Description: Blue background with "Task App" text

3. **Fixed Income Portfolio / Analytics Site**
   - Save as: `fixed-income-portfolio.jpg` (or `.png`, `.webp`)
   - Current path in code: `/images/placeholder.svg`
   - Description: Bond Investment Calculator interface

## Steps to Add Images

1. Save your project screenshots/images to:
   ```
   /Users/yoni/ML Portfolio/public/images/
   ```

2. Name them exactly:
   - `ai-journal.jpg` (or `.png`)
   - `task-app.jpg` (or `.png`)
   - `fixed-income-portfolio.jpg` (or `.png`)

3. Update `/data/projects.ts` to use the correct extensions (if using `.jpg` instead of `.svg`)

4. Optional: Optimize images (recommended):
   - Use WebP format for best performance
   - Keep file sizes under 500KB each
   - Recommended dimensions: 1200x675px (16:9 aspect ratio)

## Once Images Are Added

The project data file (`/data/projects.ts`) currently uses placeholder images. After you add the actual images, you may need to update the file extensions if you're using `.jpg` or `.png` instead of `.svg`.

The code will automatically handle image loading errors gracefully - if an image is missing, it will show a fallback.

