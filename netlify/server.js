// netlify/server.js
import { renderPage } from 'vite-plugin-ssr/server';
import express from 'express';

const app = express();

app.use(express.static('dist/client'));

app.all('*', async (req, res) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse } = pageContext;
  if (!httpResponse) return res.status(404).send('Not found');
  res.status(httpResponse.statusCode).send(httpResponse.body);
});

export default app;
