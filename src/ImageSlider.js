import React, { Component } from 'react';

class ImageSlider extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    return(
      console.log("I am on slide " + this.props.currentSlideIndex);
    )
  }
}

export default ImageSlider;
