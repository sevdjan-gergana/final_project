import React from 'react';
import classes from './GenresModal.module.scss';
import Button from '../UI/Button/Button.js';

const genres = ["Contemporary", "Fiction", "Romance", "Young Adult", "Art", "Biography", "Business", "Chick Lit",
    "Children's", "Christian", "Classics", "Comics", "Cookbooks", "Crime", "Ebooks", "Fantasy",
    "Graphic Novels", "Historical Fiction", "History", "Horror", "Humor and Comedy", "Manga", "Memoir",
    "Music", "Mystery", "Nonfiction", "Paranormal", "Philosophy", "Poetry", "Psychology", "Religion",
    "Science", "Science Fiction", "Self Help", "Suspense", "Spirituality", "Sports", "Thriller", "Travel"]
    .sort();
class GenresModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedGenres: this.props.favoriteGenres.slice(),
        };
        this.hendleCheckboxClicked = this.hendleCheckboxClicked.bind(this);
        this.selectGenres = this.selectGenres.bind(this);
    }

    hendleCheckboxClicked(e) {
        if (this.state.selectedGenres.indexOf(e.target.value) !== -1) {
            this.setState({selectedGenres: this.state.selectedGenres.filter(genre => genre !== e.target.value)});
        } else {
            this.state.selectedGenres.push(e.target.value);
        }
    }

    selectGenres(e) {
        e.preventDefault();
        const user = JSON.parse(window.localStorage.getItem(window.sessionStorage.getItem("user")));
        if (user) {
            user.genres = this.state.selectedGenres;
            window.localStorage.setItem(user.username, JSON.stringify(user));
        }
        this.props.handleModalClose(this.state.selectedGenres);

    }

    render() {
        return (
            <div className={classes.ModalWindow}>
                <div>
                    <div title="Close" className={classes.ModalClose} onClick={() => this.props.handleModalClose(this.props.favoriteGenres.slice())}>Close</div>
                    <h1>Choose your favorites genres</h1>
                    <div>
                        <form onSubmit={this.selectGenres}>
                            <div className={classes.CheckList}>
                                {genres.map((genre, i) => {
                                    return <label key={genre}>
                                        <input type="checkbox" onClick={this.hendleCheckboxClicked} name={genre} value={genre}
                                        defaultChecked={this.state.selectedGenres.indexOf(genre)===-1?false:true}/>
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