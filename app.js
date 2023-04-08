import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, './package.json'), (err, content) => {
    if (err) {
      console.error(err);
    }
    res.send(`<p>${content.toString()}</p>`);
  });

  //res.send('<h1>Welcome</h1>');
});
if (process.env.NODE_ENV == 'development') {
  console.log('development mode');
} else {
  console.log('production mode');
}
// fs.readFile(path.join(__dirname, './package.json'), (err, content) => {
//   if (err) {
//     console.error(err);
//   }
//   res.send(`<p>${content.toString()}</p>`);
// });

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
