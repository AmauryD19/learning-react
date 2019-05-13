import React from 'react';


class Establishment extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isLiked : false,
            isDisliked : false,
            likeCounter: 0,
            dislikeCounter : 0
        }
    }

    like = () =>{

        let likeCounter = this.state.likeCounter;
        let dislikeCounter = this.state.dislikeCounter;

        likeCounter += !this.state.isLiked ? 1 : -1
        dislikeCounter  +=  this.state.isDisliked ? -1 : 0

        this.setState({
            isLiked : !this.state.isLiked,
            isDisliked : this.state.isDisliked ? !this.state.isDisliked : this.state.isDisliked,
            likeCounter : likeCounter,
            dislikeCounter : dislikeCounter
        })
    }

    dislike = () =>{
        let likeCounter = this.state.likeCounter;
    let dislikeCounter = this.state.dislikeCounter;

    dislikeCounter +=  !this.state.isDisliked ? 1 : -1
    likeCounter +=  this.state.isLiked ? -1 : 0

    this.setState({
        isDisliked : !this.state.isDisliked,
        isLiked : this.state.isLiked ? !this.state.isLiked : this.state.isLiked,
        likeCounter : likeCounter,
        dislikeCounter : dislikeCounter
        })
    }
    
    render() {

        // On définit les éléments "upIcon(like) et downIcon(dislike)"
        // on utilise ici Font-Answome (on inclura le fichier css dans ./public.index.html)
        let upIcon = <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        let downIcon = <i className="fa fa-thumbs-down" aria-hidden="true"></i>

        // Si l'on n'a pas encore "liké"
        if(!this.state.isLiked){
            upIcon = <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        }
        // Si l'on a pas encore "disliké"
        if(!this.state.isDisliked){
            downIcon = <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
        }

        return (
            <div className='establishment' >
                <div className='establishment-description' >
                    <h3>{ this.props.establishment.name }</h3>

                    { this.props.establishment.description }
                </div>
                <div className='establishmentLikeDislike' >
                    {/* Au clic sur le bouton on appelle la fonction */}
                    <button onClick={this.like}>{ upIcon } </button> <span>{ this.state.likeCounter }</span>
                    <button onClick={this.dislike}>{ downIcon }</button> <span>{ this.state.dislikeCounter }</span>
                </div>

            </div>
        );
    }
}

export default Establishment;