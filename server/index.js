
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
const OpenAI = require('openai');
const loadRecipes = require('./database/read');

const port = process.env.PORT || 5000;
const OpenAiApiKey = process.env.OPENAI_API_KEY;


//firebase function imports
const getRecipes = require('./database/read');

const openai = new OpenAI({ apiKey: OpenAiApiKey })

// server test
app.get('/', async (req, res) => {
    res.send('Hello from server!')
})



// gp3 recipe request route and call
app.post('/api/recipe', async (req, res) => {
    const reqbody = await ((req.body.body))
    const ingredients = reqbody.toString();
    console.log({ ingredients })


    //openAI-gp3 request
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `You are a chef. You are a chef. Create a recipe using only and only these ingredients:${ingredients}. You may also use salt pepper and water as part of the ingredients.  The content should be formatted in SEO-friendly HTML. In addition to using HTML, your response should be limited to using the following HTML tags: h2, h3, ul, and numbered li, and p tags. Omit the word recipe in the recipe title.`
            }
        ]
    })
    const gp3Response = completion.choices[0].message.content
    res.status(200).send(gp3Response);
})

// dalle api route setup
app.get('/api/image', async (req, res) => {
    res.send('Hello from image route!')
})

// dall-3 post request route and call
app.post('/api/image', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const reqBody = await (req.body.body)
    const ingredients = reqBody[0].ingredients
    const title = reqBody[1].title;

    // request dalle api
    const dalleCall = await openai.images.generate({
        model: "dall-e-2",
        prompt: `photo of a ${title} showing made ONLY with these ingredients: ${ingredients}, long shot, centered, editorial photography, food photography, Samyang/Rokinon Xeen 50mm T1.5 lens, bokeh,`,
        size: '512x512',
        n: 1,
        quality: 'hd',
        response_format: 'b64_json'
    })

    const image = await dalleCall.data[0].b64_json;
    res.status(200).json({ photo: image });
})

/**
 * FIREBASE ROUTES
 */

app.get('/gallery', async (req, res) => {
    // res.send('hello from gallery recipes')
    const recipes = await loadRecipes();
    res.send(recipes);

})

app.post('/gallery', async (req, res) => {
    const recipeData = req.body;

})



app.listen(port, () => { console.log(`server running on port ${port}`) })


