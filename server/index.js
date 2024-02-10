const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');



require('dotenv').config();
const app = express();

const PORT = 5000
const apiKey = process.env.OPENAI_API_KEY;

app.use(express.json()) // for parsing application/json

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', async (req, res) => {
    res.send('Hello from server!')
})

app.get('/api/recipe', async (req, res) => {
    res.send('Hello from recipe route!')
})

app.post('/api/recipe', async (req, res) => {
    const reqbody = await ((req.body.body))

    const ingredients = reqbody.toString()

    const openai = new OpenAI({ apiKey: apiKey })
    const aiModel = "gpt-3.5-turbo"
    const messages = [
        {
            role: "system",
            content: `You are a chef. You are a chef. Create a recipe using only and only these ingredients:${ingredients}. You may also use salt pepper and water as part of the ingredients. The response should be in html tags, using h2, ul, and numbered li and p tags.`
        }
    ]

    const completion = await openai.chat.completions.create({
        model: aiModel,
        messages
    })

    const gp3Response = completion.choices[0].message.content
    console.log({ gp3Response })
    res.status(200).send(gp3Response)

})

app.listen(PORT, () => { console.log(`server running on port ${PORT}`) })
