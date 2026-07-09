# GitHub Pages site

This folder is deployed to GitHub Pages by [`.github/workflows/pages.yml`](/Users/bozapro/vertt/project_vertt/.github/workflows/pages.yml).

## How it works

- `site/` is uploaded as the Pages artifact.
- No build step is required.
- This avoids conflicts with the repository's existing `docs/` directory, which already stores project documents.

## Custom domain

When you have the real domain:

1. In GitHub, open `Settings -> Pages`.
2. Under `Custom domain`, enter the domain and save it.
3. Update DNS records with your provider.

Use GitHub's official documentation for the exact record type:

- Apex domain (`example.com`): `ALIAS`, `ANAME`, or `A` records to GitHub Pages IPs
- Subdomain (`www.example.com`): `CNAME` to `<user>.github.io` or `<organization>.github.io`

Because this repository publishes with a custom GitHub Actions workflow, GitHub does not create a `CNAME` file for you, and an existing `CNAME` file is ignored.

Reference:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
