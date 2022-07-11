import books from '../models/books.js';

export default {

    async ListBooks(req, res){
        try {
            const listBooks = await books.find();
            return await res.status(200).json(listBooks)
        }catch(error){
            return await res.status(400).json({Message: `Um erro inesperado ocorreu ${error}`})
        }
    },

    async RegisterBook(req,res){
        let {title, author, publishingCompany } = req.body;
            if(!title){
                return res.status(400).json({erro: "id e titulo não podem ser nulos"})
            }
        try{
            const createdbook = await books.create({
                title,
                author,
                publishingCompany
            });
            return res.status(201).json(createdbook);
        }catch(e){res.status(400).send(e)}
    },

    async DeleteBook(req, res){
        let { id } = req.params;
        try{
            const bookDeleted = await books.findOneAndDelete({_id: id})
            return res.status(200).json(bookDeleted)
        }catch(e){
            return res.status(401).send({error: "não foi encontrado registro pra deletar"})
        }

        //if(bookDeleted){return res.status(204).json(bookDeleted);}

    },

    async UpdateBook(req, res){
        let { id } = req.params;
        try{
            const bookUpdated = await books.findByIdAndUpdate(id, req.body)
            return res.status(204).json(bookUpdated);
        }catch(e){
            return res.status(401).json({error: "não foi encontrado registro pra atualizar" + e})
        }

    }


}
