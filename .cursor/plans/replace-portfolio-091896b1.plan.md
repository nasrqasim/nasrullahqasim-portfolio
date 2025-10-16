<!-- 091896b1-f317-41e8-86a5-1e76ffbfbdd5 f06bcf2e-7bc1-44d5-b165-c75fbb958c43 -->
# Update Home, Projects, and About Pages with New Images

## Scope

- Homepage: Show 3 clean, linkable project cards side-by-side using new images (Fake News Detection, Urdu AI Learning, Flood Detection).
- Projects page: Grid layout of the same 3 project cards with room for longer descriptions.
- About page: Simplified layout centered on a profile image using `nasrp3.png` (replacing any placeholder).

## Files to Edit

- `src/components/pages/Home.tsx`
- `src/components/pages/Projects.tsx`
- `src/components/pages/About.tsx`

## Changes

### 1) Homepage (`Home.tsx`)

- In `featuredProjects`, replace image fields to use local PNGs placed at repo root (served statically):
- Fake News Detection → `"fake detection.png"`
- Urdu AI Learning → `"urdu ai learning.png"`
- Flood Detection → `"Flood detection.png"`
- Ensure a 3-column grid on large screens (existing `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` is fine).
- Make each card linkable by wrapping `ProjectCard` with a clickable container or passing a link prop if supported. If `ProjectCard` has no link prop, wrap in `<a href="#">` for now.

### 2) Projects Page (`Projects.tsx`)

- Render the same 3 projects in a grid (3 columns on large screens) with slightly longer descriptions.
- Use the same images and alt text as on the homepage.

### 3) About Page (`About.tsx`)

- Simplify content: heading, short bio paragraph, centered profile image using `nasrp3.png`.
- Remove project cards from About if any are present.

### 4) Image Sizing

- For all `<img>` tags: apply classes for responsive cover fit
- Example: `className="w-full h-56 object-cover rounded-xl"` (or adjust height as needed per design)

## Notes

- The images are at repo root; reference as `src="fake detection.png"`, `src="urdu ai learning.png"`, `src="Flood detection.png"`, and `src="nasrp3.png"`.
- No new animations or global CSS changes; use existing Tailwind utility classes only.

### To-dos

- [ ] Replace homepage featuredProjects with new images and make linkable
- [ ] Render 3 project cards grid on Projects page with longer descriptions
- [ ] Center profile image using nasrp3.png and remove project cards