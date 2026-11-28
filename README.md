# Souqna | سوقنا

An original Arabic RTL marketplace-style React learning project. Inspired by the broad multi-category shopping pattern, not affiliated with Noon and not a copy of its branding, images or code.

**No real commerce:** all 12 products, illustrations, specifications and EGP prices are fictional. There is no checkout, payment, order, delivery, stock service, customer rating, authentication or backend. Nothing can be purchased. No personal data, account credentials or external image requests are needed.

## Functional features

- Arabic right-to-left layout and Egyptian-pound formatting
- Four categories, text search, maximum-price filter and price sorting that combine
- Product-detail dialogs with sample specifications
- Favorites and cart saved only in this browser; quantities capped at nine
- Up to three products compared side by side, with removal and clear actions
- Empty states, filter reset, corrupt-storage recovery and visible storage-failure warning
- Native modal focus containment and Escape close, named controls and reduced-motion support
- Original inline SVG illustrations, no copied merchant assets

## Run and test

Use Node.js 22.12+ or a supported newer release.

```sh
npm ci
npm run dev
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Open `/app.html` for source development. The root `index.html` is a separate prebuilt GitHub Pages entry. The source build outputs `dist/app.html` and assets. Rename it to `dist/index.html` and deploy the complete dist folder for a new release. Editing source alone does not update the committed prebuilt page.

Browser tests use Playwright Chromium by default; set `CHROME_PATH` to an installed Chrome path if preferred. Tests cover filtering, sorting, price range, favorites, details, persistence, quantity changes, compare limit/removal, corrupted storage, keyboard focus, and layout at 320/390/1280 pixels. This is not a complete accessibility audit.

## Code map

- `App.jsx`: state, components, SVG art, catalog and dialogs
- `model.js`: fictional catalog, filtering, safe restoration and integer-money totals
- `style.css`: responsive RTL design
- `model.test.js`, `app.spec.js`: unit and browser tests
- `EXPLAIN-AR.md`: Arabic walkthrough and exercises

