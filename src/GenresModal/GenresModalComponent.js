import React from 'react';
import * as classes from './GenresModal.module.scss';


class GenresModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: ["Contemporary", "Fiction", "Romance", "Young Adult", "Art", "Biography", "Business", "Chick Lit",
                "Children's", "Christian", "Classics", "Comics", "Cookbooks", "Crime", "Ebooks", "Fantasy",
                "Graphic Novels", "Historical Fiction", "History", "Horror", "Humor and Comedy", "Manga", "Memoir",
                "Music", "Mystery", "Nonfiction", "Paranormal", "Philosophy", "Poetry", "Psychology", "Religion",
                "Science", "Science Fiction", "Self Help", "Suspense", "Spirituality", "Sports", "Thriller", "Travel"
            ],
        };
    }

    render() {
        return (
            <div className={classes.Background}>
                <div className={classes.ModalWindow}>
                    <div>
                        <div title="Close" className={classes.ModalClose} onClick={() => this.props.handleModalClose()}>Close</div>
                        <h1>Choose your favorites genres</h1>
                        <div>
                            <form>
                                {this.state.genres.map((genre, i)=>{
                                    return <label>
                                        <input type="checkbox" name={genre} value={genre} />
                                        {genre}                                        
                                    </label>
                                    })}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default GenresModal;