import { App } from './src/app';

const PORT = process.env.PORT || 8099;
const HOST = '0.0.0.0';
const app = new App();

app.server().listen(PORT, HOST, () => {
  console.log(`server running on port ${PORT}.`);

})