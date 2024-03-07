const express = require('express');
const router = express.Router();

// let books = [
//     { title: "Livre 1", author: "Auteur 1", publisher: "Publisher 1", category: "Catégorie 1", year: 2020 },
//     { title: "Livre 2", author: "Auteur 2", publisher: "Publisher 2", category: "Catégorie 2", year: 2018 },
// ];

router.get('/all', (req, res) => {
    const books = BookModel.find({},function(err, docs){
        console.log(docs);
    })
    // const books = BookModel.find({},function(err, docs){
    //     console.log(docs);
    // })
    res.json(books);

});

router.get('/authors/:livrename', (req, res) => {
    const books = BookModel.find( { "_id": ObjectId("65e6d252a540ff1dbcdd7531") },{ "authors": 1, "_id": 0 },function(err, docs){
        console.log(docs);})
        res.json(books)
    
});

router.get('/publishers/:livrename', (req, res) => {
    const books = BookModel.find( { "_id": ObjectId("65e6d252a540ff1dbcdd7531") },{ "publishers": 1, "_id": 0 },function(err, docs){
        console.log(docs);})
        res.json(books)
    // const livrename = req.params.livrename;
    // const publishersOfBook = books.filter(book => book.title === livrename).map(book => book.publisher);
    // res.json(publishersOfBook);
});

router.get('/listCategorie/:category', (req, res) => {
    const books = BookModel.find({ "categorie": "categorie1"},function(err, docs){
        console.log(docs);})
        res.json(books)
});

router.get('/:annee1/:annee2', (req, res) => {
    const books = BookModel.find({ "annee_sortie": {$gte: annee1,$lte: annee2}},function(err, docs){
        console.log(docs);})
        res.json(books)

    // const annee1 = parseInt(req.params.annee1);
    // const annee2 = parseInt(req.params.annee2);
    // const booksBetweenYears = books.filter(book => book.year >= annee1 && book.year <= annee2);
    // res.json(booksBetweenYears);
});

router.post('/add', (req, res) => {
   BookModel = mongoose.model('Book' ,authorSchema, 'BaseD');
UserModel.insertMany([
{title: "ABBB", auther:"mami",publisher:"publi2",category:"categorie",year:2021},
{title: "DEDD", auther:"LALA",publisher:"publi6",category:"categorie",year:2022},

]).then((docs) => {
console.log("Inserted books");
console.log(docs);
}).catch((e)=>{console.log(e)})
    // const newBook = req.body;
    // books.push(newBook);
    // res.status(201).json(newBook);
});

router.put('/update/:title', (req, res) => {
    const title = req.params.title;
    const updatedBook = req.body;
    AuthorModel.updateOne({title:`${title}`},{auther:"Awa"},function(err, res){
        console.log(`Modified ${res.n} document`);
        });
    // books = books.map(book => {
    //     if (book.title === title) {
    //         return updatedBook;
    //     }
    //     return book;
    // });
    res.json(updatedBook);
});

router.delete('/delete/:title', (req, res) => {
    const title = req.params.title;
    BookModel.deleteOne({title:`${title} `},function(err, res){
        console.log(`Modified ${res.n} document`);
    // books = books.filter(book => book.title !== title);
    // res.sendStatus(204);
})});

module.exports = router;