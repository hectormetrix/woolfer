# Woolfsheds website

Homepage for J.B. Woolfsheds. Vite + React + TypeScript + Tailwind CSS v4.

## Run it

```
npm install
npm run dev
```

In a GitHub Codespace the install runs on its own; start `npm run dev` and open the forwarded port 5173 for the live preview. `npm run build` writes the production site to `dist/`.

## Before it goes live

- **Logo:** save the logo as `public/logo.png`. The header and footer already point to it.
- **Form:** the inspection form opens the visitor's email app. Replace `submitInspection` in `src/components/InspectionRequest.tsx` when the backend is ready.
- **Reviews:** the three review cards are labelled as illustrative. Swap in real ones in `src/data/site.ts` and remove the label in `src/components/Reviews.tsx`.

## Where things live

| What | File |
| --- | --- |
| Products, prices, phone, address, hours, review text | `src/data/site.ts` |
| Colors, fonts, all styling | `src/styles.css` (brand blue is `--blue` at the top) |
| Page order | `src/App.tsx` |
| One file per section | `src/components/` |
