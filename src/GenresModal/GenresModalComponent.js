import React from 'react';
import classes from './GenresModal.module.scss';
import Button from '../UI/Button/Button.js';


class GenresModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: ["Contemporary", "Fiction", "Romance", "Young Adult", "Art", "Biography", "Business", "Chick Lit",
                "Children's", "Christian", "Classics", "Comics", "Cookbooks", "Crime", "Ebooks", "Fantasy",
                "Graphic Novels", "Historical Fiction", "History", "Horror", "Humor and Comedy", "Manga", "Memoir",
                "Music", "Mystery", "Nonfiction", "Paranormal", "Philosophy", "Poetry", "Psychology", "Religion",
                "Science", "Science Fiction", "Self Help", "Suspense", "Spirituality", "Sports", "Thriller", "Travel"
            ].sort(),
            selectedGenres: [],
        };
        this.hendleCheckboxClicked = this.hendleCheckboxClicked.bind(this);
        this.selectGenres = this.selectGenres.bind(this);
    }

    hendleCheckboxClicked(e) {
        if (this.state.selectedGenres.indexOf(e.target.value) !== -1) {
            this.state.selectedGenres = this.state.selectedGenres.filter(genre => genre !== e.target.value);
        } else {
            this.state.selectedGenres.push(e.target.value);
        }
        console.log(this.state.selectedGenres);
    }

    selectGenres(e){
        e.preventDefault();
        const user = JSON.parse(window.localStorage.getItem(window.sessionStorage.getItem("user")));
        if(user){
            user.genres = this.state.selectedGenres;
            window.localStorage.setItem(user.username, JSON.stringify(user));
        }
        this.props.handleModalClose();
        window.location.reload();
    }

    render() {
        return (
            <div className={classes.ModalWindow}>
                <div>
                    <div title="Close" className={classes.ModalClose} onClick={() => this.props.handleModalClose()}>Close</div>
                    <h1>Choose your favorites genres</h1>
                    <div>
                        <form onSubmit={this.selectGenres}>
                            <div className={classes.CheckList}>
                                {this.state.genres.map((genre, i) => {
                                    return <label>
                                        <input type="checkbox" onClick={this.hendleCheckboxClicked} name={genre} value={genre} />
                                        {genre}
                                    </label>
                                })}
                            </div>
                            <div className={classes.SubmitButton} >
                                <Button type="submit" title="OK" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default GenresModal;