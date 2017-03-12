import React, {Component} from 'react';

export default class RatingBar extends Component {
  render() {
    // star, star-half, star-outline
    let buff = this.props.stars + 1; 
    let stars = [];
    while (--buff >= 1) stars.push('fa fa-star');
    if (buff == 0.5) stars.push('fa fa-star-half-o');
    for (var i = stars.length; i < 5; i++) stars.push('fa fa-star-o');
    return (
        <ul>
        {
          stars.map((star) => {
            return (<i className={star}></i>);
          })
        }
        </ul>
    )
  }
}