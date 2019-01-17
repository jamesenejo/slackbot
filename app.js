import bodyParser from 'body-parser';
import express from 'express';
import { Text } from './message/classes';
import Messages from './message/Messages';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/v1/slack/command', (req, res) => {
  console.log(req.body);
  res.status(200).json(Messages.WelcomeMessage());
});

app.post('/api/v1/slack/actions', (req, res) => {
  console.log(req.body);
  res.status(200).json(Messages.WelcomeMessage());
});

app.get('*', (req, res) => res.status(200).json({ message: 'We are live' }));

app.listen(5000, () => console.log('Running...'));
