import Book from "../modal/book.modal.js";

export const getBook= async(req,res)=>{
    try {
        const book =await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("error: ",error);
        req.status(500).json(error);
    }
}