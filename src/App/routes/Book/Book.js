import React from 'react';
import Footer from '../../../Footer/Footer';
import classes from '../Book/BookDetails.module.scss';


class BookDetailsComponent extends React.Component {

    state={
        book:{
            id: '',
            volumeInfo:{
                title:'',
                authors:'',
                description:'',
                categories:'',
                imageLinks:{
                    small:''
                }
            }
        }

        
        
    }
   async componentDidMount(){
    const id=this.props.match.params.id;
    const res=await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    console.log(id);
    const book=await res.json();
    this.setState({book});
    console.log(book);
    console.log(book.kind);
   }
    render() {
        // console.log(this.state.book.volumeInfo.title);
        return (
            <React.Fragment>
           
             <div className={classes.bookWrapper}>
                 <h1>{this.state.book.volumeInfo.title}</h1>
                 
                 <h3>{this.state.book.volumeInfo.authors}</h3>
                 {this.state.book.volumeInfo.categories}

                 <div>
                 <img  src={this.state.book.volumeInfo.imageLinks.small} alt='' />
                 <p>{this.state.book.volumeInfo.description}</p>
                 </div>
                 
                 
             </div>
              
                <Footer />
            </React.Fragment>
        );
    }
}

export default BookDetailsComponent;