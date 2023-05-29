import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Book = props => (
    <tr>
        <td>{props.book.username}</td>
        <td>{props.book.bookname}</td>
        <td>{props.book.description}</td>
        <td>{props.book.duration}</td>
        <td>{props.book.date.substring(0,10)}</td>
        
        <td>
            <Link to={"/edit/"+props.book._id}>edit</Link> | <a href ="#" onClick={() => {props.deleteBook(props.book._id)}}>delete</a> 
        </td>
    </tr>
)

export default class BookList extends Component{
    constructor(props){
        super(props);

        this.deleteBook = this.deleteBook.bind(this)

        this.state = {books: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/books/')
        .then(response => {
            this.setState({
                books: response.data
            })   
        })
        .catch((error) => {
            console.log(error);
        })
        
    }

    deleteBook(id){
        axios.delete('http://localhost:5000/books/'+id)
        .then(res => console.log(res.data));
        this.setState({
            books : this.state.books.filter(el => el._id !== id)
        })
    }

    bookList(){
        return this.state.books.map(currententry => {
            
            return <Book book={currententry} deleteBook={this.deleteBook} key={currententry._id} />;
        })
    }


    render(){
        return(
            <div>
                <h3>Logged Entries</h3>
                <table className = "table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Bookname</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.bookList() }
                    </tbody>
                </table>
            </div>
        )
    }
}