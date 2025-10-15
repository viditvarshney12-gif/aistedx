<!-- db67eee7-3973-46ad-8313-e6154b550daf 9b87e858-63d1-45d9-9e5d-966e57cb7035 -->
# Mobile + tablet optimizations (contain hero, restore animations)

## Hero banner (Home)

- Use bg-contain for mobile with top/bottom gradient overlays to avoid visible gaps while preserving full image; switch to bg-cover from md+
- Set section height to 100svh on mobile; remove excess padding/margins; pull CTA upward; reduce CTA size on mobile
- Ensure container uses flex/center with no vertical whitespace between hero and next section

Files:

- `src/pages/Home.tsx`: adjust hero section classes; add gradient overlays above/below background layer; shrink CTA text/padding; tighten top padding on small screens

## Lanyard (See You There) layout

- Force horizontal layout across all breakpoints (image – text – image in one row), with wrapping disabled; keep spacing responsive

Files:

- `src/pages/Home.tsx`: change lanyard container to `flex-row` across all screens, remove `md:flex-row` and `flex-col`

## Restore animations on mobile

- Re-enable ScrollReveal/ScrollFloat/Glow effects on mobile (no conditional off)
- RotatingText already updated to animate on mobile
- Ensure icon float/glow animations are active for Team and Speakers hero icons

Files:

- `src/components/effects/ScrollFloat.tsx`: already fixed hook order; ensure no mobile early return
- `src/pages/Team.tsx`, `src/pages/Speakers.tsx`: add/verify `animate-float`/glow classes on emoji/icon containers; keep shimmer/glow text via `ShinyText`

## Typography & spacing

- Headline (is Back…) mobile size tuned to avoid wrapping issues while keeping animation visible
- Event Details mobile typography kept compact (1–2 lines)

Files:

- `src/pages/Home.tsx`: headline sizes (already adjusted) and event details text classes

## Tailwind breakpoints

- Keep explicit screens (xs/sm/md/lg/xl/2xl) that were added

Files:

- `tailwind.config.ts`: already defined, no further change

## Footer links

- Keep hash links for HashRouter navigation on mobile

Files:

- `src/components/Footer.tsx`: already hashed

### To-dos

- [ ] Home hero: bg-contain mobile, gradient top/bottom overlays, 100svh, tighten padding
- [ ] Shrink Pre-Book button on mobile and move it upward
- [ ] Force lanyard section to horizontal layout on all breakpoints
- [ ] Ensure ScrollReveal/ScrollFloat/glow animations run on mobile too
- [ ] Add/verify glow + float icon animations on Team and Speakers pages
- [ ] Confirm mobile typography fits (headline and event details) without overflow
- [ ] Commit and push changes to main as viditvarshney12-gif