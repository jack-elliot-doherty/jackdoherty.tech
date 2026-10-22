# jackdoherty.tech

My personal site. Plain HTML and CSS in `public/`, with no build step or packages.

Run locally with Python 3:

```sh
python3 -m http.server 3000 --bind 127.0.0.1 --directory public
```

Open [localhost:3000](http://127.0.0.1:3000/). Edit `public/index.html` or `public/styles.css`, then refresh the page.

`vercel.json` configures Vercel to serve `public/` directly. Keep the custom domain attached to the same Vercel project.
