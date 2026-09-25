# Reshmi A K — Portfolio

A React + Vite portfolio site built from resume data.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Adding a project link

Open [src/data/resumeData.js](src/data/resumeData.js) and fill in `liveUrl`
and/or `githubUrl` for the relevant entry in the `projects` array — the
Projects section picks these up automatically and renders the buttons.

To add a brand-new project, append another object to the same array.

## Adding the downloadable resume

Drop the resume PDF into [public/](public/) as `resume.pdf`. The Resume
section already links to `/resume.pdf`.
