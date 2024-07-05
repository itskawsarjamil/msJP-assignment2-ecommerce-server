import mongoose from 'mongoose';
import config from './app/config';
import { Server } from 'http';
import { app } from './app';
import fs from 'fs';
const clientOptions: object = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

let server: Server;

async function main() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(config.database_url_local as string, clientOptions);
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (e) {
    console.log(e);
  }
}
main().catch(console.dir);

process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}\n`,
  );
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
