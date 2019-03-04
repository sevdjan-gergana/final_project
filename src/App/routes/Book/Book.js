import React from 'react';
// import classes from './BookDetails.module.scss';

class BookDetailsComponent extends React.Component {

    state = {
        book: {}
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/books/v1/volumes/sUcrAQAAIAAJ`, {
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
            },
            method: 'GET',
            mode: 'cors'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }

                return Promise.reject({
                    status: response.status,
                    messagePromise: response.json()
                });
            }).then(data => {
                console.log(data);
                this.setState({
                    book: data
                })
            }).catch(e => console.log(e))
    }

    render() {
        return (
            (this.book)?
            <div>
                <img src={this.state.book.volumeinfo.imageLinks.thumbnail} width="200px" alt="book img"/>
                <p>{this.state.book.volumeinfo.title}</p>
                <p>{this.state.book.volumeinfo.authors[0]}</p>
                {/* <p>{this.state.book.volumeinfo.description}</p> */}
            </div>
            :<div>it is coming</div>
        );
    }
}

export default BookDetailsComponent;

// const BookDetailsComponent = props => {
   
//     const id = props.match.params.id;
//     return (
//         <div>
//           <h2>Detaili za product s id: {id}</h2>           
//         </div>
//     );  
// }

// export default BookDetailsComponent;