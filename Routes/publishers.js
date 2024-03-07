const express = require('express');
const router = express.Router();

router.use(express.json());

// let publishers = [];

router.get('/all', (req, res) => {
    const publisher = PublisherModel.find({},function(err, docs){
        console.log(docs);})
        res.json(publisher);
});

router.get('/names', (req, res) => {
    const publisher = PublisherModel.find(editeur,function(err, docs){
        console.log(docs);})
        res.json(publisher); //car dans ma baseD j'ai inseré editeur aulieu de nom
});

router.get('/publishers', (req, res) => {
    const publisher = PublisherModel.find(agregate{
        $group: {
            _id: "$book.auteurs.nom", 
            nombreLivres: { $sum: 1 }}
    },function(err, docs){
        console.log(docs);})
        res.json(publisher); 
});

router.post('/add', (req, res) => {
    PublisherModel = mongoose.model('Publisher' ,authorSchema, 'BaseD');
    UserModel.insertMany([
    {editeur: "ABBB", auther:"mami",livre:"li1"},
    {editeur: "DEDD", auther:"LALA",livre:"li2"},
    
    ]).then((docs) => {
    console.log("Inserted publisher");
    console.log(docs);
    }).catch((e)=>{console.log(e)})
});

router.put('/update/:name', (req, res) => {
    const publish = req.params.name;
    const updatedpublisher = req.body;

    AuthorModel.updateOne({nom:`${publish}`},{auther:"awaaa"},{livre:"l3"},function(err, res){
        console.log(`Modified ${res.n} document`);
        });
        res.json(updatedpublisher); 
        
});

router.delete('/delete/:name', (req, res) => {
    const publisherName = req.params.name;

    const name = req.params.name;
    AuthorModel.deleteOne({nom:`${name}`},function(err, res){
        console.log(`Modified ${res.n} document`);
        });
});

module.exports = router;