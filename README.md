# vt

Video theatre. Live at https://turbodog111.github.io/vt/

This is not vp. vp stays the music player at https://turbodog111.github.io/vp/. vt is the house: pick a theatre and watch it full-screen. Music theatres still load from vp. Character-reel mp4s play from a local clips folder (no CORS) via Load local clips, or from this folder over localhost.

## Sign-in

A public GitHub repo cannot hide a password. Anyone can read this code.

GitHub Pages on `*.github.io` also has no login of its own.

The lock that does **not** live in this repo is an outside gate on a **custom domain** (Cloudflare Access, or any reverse proxy with real auth). The browser never sees the password, and cloning GitHub still would not get you into the live site. See `ACCESS.md`.

Until that domain exists, `github.io/vt` is reachable like any public Pages site.
