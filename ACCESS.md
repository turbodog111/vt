# Live-site lock (not in this repo)

Public source stays public. The sign-in wall belongs in front of the hosted URL.

That is not possible on `turbodog111.github.io` itself. You do not control that DNS.

When you have a domain (example: `vt.yourdomain.com`):

1. Point it at this Pages site (CNAME `turbodog111.github.io`).
2. Put Cloudflare Access (or equivalent) on that hostname.
3. Invite only the people who should get in.

The gate runs at Cloudflare. This repository never stores a password or a login form.

Cloning the public repo still shows the theatre code. It does not bypass Access on the custom domain.
