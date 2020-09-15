const Express = require('express');
const fetch = require('node-fetch');

const app = Express();


async function getAdvice(){
    try{
        let res = await fetch('https://api.adviceslip.com/advice');
        let data = await res.json();
        return data['slip']['advice'];
    }catch(err){
        console.error(err);
        return "Something went wrong! :(";
    }
}


app.get('/', async (req, res) => {
    let advice=await getAdvice();
    res.send(`${new Date().toLocaleTimeString()} - ${advice}` );
})


app.get('/*', (req, res) => {
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => console.log(`Listening at port ${process.env.PORT || 3000}`))