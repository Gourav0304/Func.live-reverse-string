import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.post('/functions/reverseStringByGourav', async (req, res) => {
  try {
    const { input } = req.body;
    if (typeof input !== 'string') {
      throw new TypeError('Expected a string as input');
    }
    const output = input.split('').reverse().join('');
    res.send({ output });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


app.get('/functions/reverseStringByGourav', (req, res) => {
  res.send({
    name: "reverseStringByGourav",
    description: "Reverses the given string",
    input: {
      type: "string",
      description: "The string to reverse",
      example: "hello"
    },
    output: {
      type: "string",
      description: "The reversed string",
      example: "olleh"
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
