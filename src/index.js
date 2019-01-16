import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import routes from './routes';

const PORT = 4000;
const app = new Koa();

app.use(bodyParser());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
