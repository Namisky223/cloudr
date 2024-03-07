const express = require('express');
const router = express.Router();

// let authors = [
//     // { name: "Auteur 1", books: 1 },
//     // { name: "Auteur 2", books: 2 },
// ];

router.get('/all', (req, res) => {
    const authors = AuthorModel.find({},function(err, docs){
        console.log(docs);
    })
    
    res.json(authors);
});

router.get('/names', (req, res) => {
    let authorNames = AuthorModel.find(nom,function(err, docs){
        console.log(docs);
        });
    res.json(authorNames);
});

router.get('/books', (req, res) => {
 const booksAuthor = AuthorModel.find(author => ({ name: author.name, books: author.books }));
    res.json(booksAuthor);
        // Publisher.aggregate([
    //     {
    //       $lookup: {
    //         from: 'books', // Assurez-vous que 'books' est le nom de votre collection de livres
    //         localField: '_id',
    //         foreignField: 'publisherId',
    //         as: 'books'
    //       }
    //     },
    //     {
    //       $project: {
    //         name: 1,
    //         bookCount: { $size: '$books' }
    //       }
    //     }
    //   ]
    
});

router.post('/add', (req, res) => {
   AuthorModel = mongoose.model('Author' ,authorSchema, 'BaseD');
UserModel.insertMany([
{nom: "hafsa", book:1},
{nom: "oumaima", book:2},
{nom: "Adam", book:3},
]).then((docs) => {
console.log("Inserted authors");
console.log(docs);
}).catch((e)=>{console.log(e)})

    // const newAuthor = req.body;
    // authors.push(newAuthor);
    // res.status(201).json(newAuthor);
});

router.put('/update/:name', (req, res) => {
   const name = req.params.name;
   const updateauthor = req.body;

    // const updatedAuthor = req.body;
    // authors = authors.map(author => {
    //     if (author.name === name) {
    //         return updatedAuthor;
    //     }
    //     return author;
    // });
    // res.json(updatedAuthor);
    AuthorModel.updateOne({nom:`${name}`},{book:6},function(err, res){
        console.log(`Modified ${res.n} document`);
        });
    res.json(updateauthor);
        
    
});

router.delete('/delete/:name', (req, res) => {
    const name = req.params.name;
    AuthorModel.deleteOne({nom:`${name}`},function(err, res){
        console.log(`Modified ${res.n} document`);
        });
    // authors = authors.filter(author => author.name !== name);
    // res.sendStatus(204);
});

module.exports = router;