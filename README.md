### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

This is a demonstration of nodejs compatability not working in Vite 6 with Cloudflare Workers.

The application loads the result of the node js function on first execution (you'll see it outputted in the HTML), however, it seems to then recall the function (not sure why as it's in a .server.ts file and only called from the loader), and the import seems to fail, and as a result the whole application crashes.

The application was generated using `npm create cloudflare@latest my-react-app -- --framework=react-router --platform=workers` and the only modifications were to add the nodejs_compat compatability flag to wrangler.jsonc, the README.md file and the modifications to home.tsx and foo.server.ts.
