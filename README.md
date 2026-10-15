# personal-landpage

Source of [ddoblas.dev](https://ddoblas.dev), the personal website of Daniel Doblas Jiménez. It is a single static page with an arcade "character select" theme, served by GitHub Pages.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | All page content, rendered as static HTML (readable by crawlers and link previews without JavaScript) |
| `src/input.css` | Tailwind entry point plus the custom pixel-art styles |
| `styles.css` | Compiled, minified CSS. **Generated, but committed** because GitHub Pages serves the repository as-is |
| `og.png` | 1200×630 social preview image referenced by the Open Graph tags |
| `tailwind.config.js` | Theme colors and fonts; scans `index.html` for classes |

JavaScript only draws the pixel-art canvases, plays the button sound and powers the copy button. The page is fully readable without it.

## Development

Requirements: Node.js 22+.

```bash
npm ci
npm run watch    # rebuild styles.css on every change while editing
npm run build    # one-off minified build
```

Open `index.html` in a browser to preview.

**Always run `npm run build` and commit `styles.css` together with any change to `index.html`.** The `CSS` workflow fails if the committed stylesheet is stale.

## Updating content

- **Experience, projects and posts** are plain HTML in `index.html` (sections `#quests`, `#projects` and `#logbook`).
- **New Medium post**: add an `<li>` at the top of the `#logbook` list with the title, URL and `<time datetime="YYYY-MM-DD">`.
- **Social preview**: if the name or headline changes, regenerate `og.png` (1200×630) so link previews stay consistent.

After deploying, check the preview with LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/), which also refreshes LinkedIn's cache.
