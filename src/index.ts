import express from 'express';
// TODO migrate this dependency to an utility file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import subdomain from 'express-subdomain';
import httpProxy from 'http-proxy';
import morgan from 'morgan';
import path from 'path';

import { boot as bootGuessirBackend } from '../preparedModules/guessir-backend-package/build/server';

const GUESSIR_API_PORT = 3020;
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOST = process.env.HOST || '0.0.0.0';

// TODO migrate to Fastify
const app = express();
const proxy = httpProxy.createProxyServer();
const preparedModulesPath = path.join(__dirname, '../preparedModules');

app.use(morgan('tiny'));

app.use(subdomain('mi-q', express.static(path.join(preparedModulesPath, 'mi-q-build'))));
app.use(subdomain('guessir', express.static(path.join(preparedModulesPath, 'guessir-web-build'))));
app.use(
  subdomain('guessir-api', (req: any, res: any, _next: any) => {
    proxy.web(req, res, { target: `http://${HOST}:${GUESSIR_API_PORT}` });
  }),
);
app.use(subdomain('mindy', express.static(path.join(preparedModulesPath, 'mindy-build'))));
app.use(subdomain('monorepo-spa', express.static(path.join(preparedModulesPath, 'monorepo-spa-build'))));
app.use(subdomain('monorepo-spa-sb', express.static(path.join(preparedModulesPath, 'monorepo-spa-sb-build'))));
app.use(subdomain('monorepo-spa-ui-sb', express.static(path.join(preparedModulesPath, 'monorepo-spa-ui-sb-build'))));

app.get('/', (req, res) => {
  res.sendFile(path.join(preparedModulesPath, 'k-k-io-entrypoint/index.html'));
});

// Fallback not found to index.html
// app.get('*', (req, res) => {
//   // TODO pick a file depending on the domain
//   res.sendFile(path.join(preparedModulesPath, 'monorepo-spa-build/index.html'));
// });

bootGuessirBackend(HOST, GUESSIR_API_PORT);

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`);
});
