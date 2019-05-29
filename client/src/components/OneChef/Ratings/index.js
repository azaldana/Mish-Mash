import React from "react";
import ReactDOM from 'react-dom';
import Ratings from './ratings';

export const randomNumber = () => {
  return Math.random().toFixed(15).slice(2);
};

class MainRating extends React.Component {
  constructor(props) {
    super(props);
	
		this.changeRating = this.changeRating.bind(this);
    this.state = { 
      rating: 0 
    };
  }

  changeRating(rating) {
    this.setState({
      rating: rating
    })
  }

  render() {
    return (
      <div className="page-wrap">
        <div>
          <Ratings
            rating={this.state.rating}
            widgetRatedColors="#fbaa19"
            changeRating={this.changeRating}
          >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
        </div>
    	</div>
    )
  }

};

export default MainRating;