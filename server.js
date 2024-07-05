import express from "express"
import path from "path"
import {fileURLToPath} from "url"

import home from "./routes/index.js"
import Error from "./pages/error.js"

const app = express(), port = process.env.PORT || 8080, hostname = "localhost"

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

app.use("/", home)

app.get('*', (req, res) => {
    res.status(404).send(Error());
});

app.listen(port, hostname, () => console.log(`server is running on http://${hostname}:${port}`))