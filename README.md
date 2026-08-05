# nickashford.com

Personal CV site for Nicholas Ashford, served at [nickashford.com](https://nickashford.com) via GitHub Pages.

The CV content lives in two places, kept in sync:

- `cv.md` — the canonical markdown version
- `src/App.tsx` — the webpage (React + TypeScript + Vite)

## Development

```sh
deno install    # install dependencies
deno task dev   # run the dev server
deno task build # type-check and build to dist/
```

## Deployment

Every push to `master` triggers the GitHub Actions workflow in
`.github/workflows/static.yml`, which builds the site with Deno and deploys
`dist/` to GitHub Pages. The custom domain is set by `public/CNAME`.

## PDF

Print styles are defined in `src/index.css`. To produce the PDF version, open
the site, print to PDF (untick headers and footers), and drop the file into
`public/` to serve it as a static asset.
