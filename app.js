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


function getNthFibonacci(digit){
    let a=1, b=0;
    for(var i=2;i<=digit; i++){
        let x=a+b;
        b=a;
        a=x;
    }
    return {a, b};
}

app.get('/', (req, res) => {
    let queryN=req.query.n;
    let n;
    if(queryN===undefined){
        n=parseInt(Math.random()*1000);
    }else if(queryN<0 || isNaN(queryN) || parseInt(queryN)>1000){
        res.json({"error": true, "message": "Invalid query param n" });
    }else{
        n=parseInt(queryN);
    }

    let {a, b} = getNthFibonacci(n);
    console.log(n===0);
    if(n===0){
        res.json({"timestamp": new Date().toLocaleTimeString(), "Desc": "Fibonacci Sequence", "n": n, "nth term": a })
    }else{
        res.json({"timestamp": new Date().toLocaleTimeString(), "Desc": "Fibonacci Sequence", "n": n, "nth term": a, "(n-1)th term": b })
    }

})

app.get('/advice/', async (req, res) => {
    let advice=await getAdvice();
    res.send(`${new Date().toLocaleTimeString()} - ${advice}` );
})

app.get('/*', (req, res) => {
    res.redirect('/')
})

app.listen(process.env.PORT || 3000, () => console.log(`Listening at port ${process.env.PORT || 3000}`))