import React, { Component } from 'react';
import NewSingle from './NewsSingle';

class News extends Component {

    //Create a state
    constructor(props){
        super(props)
        this.state = {
            news: [],
        }
    }

    componentDidMount(){
        const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7e64d81e89f94c0a91539c2d8a1ad653'

        fetch(url)
            .then((response) =>{
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error)) ;
    }

    renderItems(){
        return this.state.news.map((item) => (
            <NewSingle key={item.id} item={item} />
        ))
    }

    render(){
        return(
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

export default News;
