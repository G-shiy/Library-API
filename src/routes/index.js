import books from "../routes/booksRoutes.js";
import express from 'express';


const routes = (app) =>{
    app.route('/').get((req, res) =>{
        res.status(200).send({
            titulo: "VOID PAGE!!!",
            content: "ISSO É UMA PÁGINA VAZIA, FOI MAL!!",
            emote: ":("
        })
    })

    app.use(
        express.json(),
        books
    )
}

export default routes;