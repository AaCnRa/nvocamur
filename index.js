const express = require('express');
const app = express();

const PORT = 3001;

/*  on indique l'emplacement des views
 *  ainsi que le view engine: ici ejs
 */
app.set('views','./views');
app.set('view engine', 'ejs')

app.use('/public',express.static('public'));

/*  on aborde les routages */
app.get('/',(req,res) => {
    const title = "Accueil";
    const style = ["style","general"];
    const script = ["script","index"];
    res.render('index',{title:title,style:style,script:script});
})

app.get('/nous',(req,res) => {
    const title = "À propos de nous";
    const style = ["style","general"];
    const script = ["script"];
    res.render('nous',{title:title,style:style,script:script});
})

app.get('/login', (req, res) => {
    const title = "Connexion";
    const style = ["style","general"];
    const script = ["script","login"];
    res.render('login',{title:title,style:style,script:script});
})

app.get('/signup', (req, res) => {
    const title = "Inscription";
    const style = ["style","general"];
    const script = ["script","signup"];
    res.render('signup',{title:title,style:style,script:script});
})

app.get('/riasec', (req, res) => {
    const title = "Riasec";
    const style = ["style","general"];
    const script = ["script","riasec"];
    res.render('riasec',{title:title,style:style,script:script});
})

app.get('/riasec/:id', (req, res) => {
    const list = ["realiste","investigateur","artiste","social","entreprenant","conventionnel"];
    const id = req.params.id;
    if(list.includes(id)){
        const title = id[0].toUpperCase()+id.slice(1);
        const style = ["style",id];
        const script = ["script"];
        const content ={
            type: id,
            intro: `Intro ${id}`,
            present: `Présentation ${id}`,
            activities: `Activities ${id}`,
            characteristics: `Caractistiques des individus du type ${id}`,
            universe: `Univers de travail ${id}`,
            introDescribe: ` Intro à la description ${id}`,
            values: `Les valeurs/objectifs caractéristiques du type ${id}`,
            visionOfWorld: `La vision du monde du type ${id}`,
            contribution: `Les contributions et apports de ${id}.`,
            improve: `Des pistes d'amélioration pour le type ${id}`,
            risks: `Les risques possibles avec ${id}.`,
            theyLead: [id,`La façon dont ${id} dirigent les autres`],
            leadThem: [id,`Comment diriger ${id}`],
            delegation: [id,`Délégation ${id}`],
            relationships: [id,`Le type et les caractéristiques des relations des ${id}`]
        }
        res.render('riasec-type',{title:title,style:style,script:script,content:content,list:list})
    }
    else{
        const title = `${req.path.slice(1)} not found`;
        const style = ["style","general"];
        const script = ["script"];
        res.status(404).render('error',{title:title,style:style,script:script,errorMessage:"Ce contenu n'existe pas"});
    }
})

app.get('/profession',(req,res) => {
    const title = "Professions";
    const style = ["style","general"];
    const script = ["script"];
    res.render('profession',{title:title,style:style,script:script});
})

app.get('/quiz', (req, res) => {
    const title = "Quiz";
    const style = ["style","general"];
    const script = ["script","quiz","quiz-pagination"];
    res.render('quiz',{title:title,style:style,script:script})
})

app.use((req,res,next) => {
    const title = `${req.path.slice(1)} not found`;
    const style = ["style","general"];
    const script = ["script"];
    res.status(404).render('error',{title:title,style:style,script:script,errorMessage:"Ce contenu n'existe pas"});
})
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});
