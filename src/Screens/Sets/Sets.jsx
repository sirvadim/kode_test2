import React, { Component } from 'react';
import '../../App.css'
class Sets extends Component {
  standardLegal() {
      if(this.props.set.standardLegal)
        return <li>Standard Legal</li>
  }
  expandedLegal() {
    if(this.props.set.expandedLegal)
      return <li>Expanded Legal</li>
  }
  render() {
    console.log(this.props)
    return (
      <div class = "set hvr-grow">
        <div>
            <div class = "content">
                <img class = "set-image" src={this.props.set.logo}/>
            </div>
            <div class = "set-content">
                <div class = "media">
                    <div class = "media-left">
                        <figure class = "image is-48x48">
                            <img class = "set-image" src={this.props.set.symbolUrl}/>
                        </figure>
                    </div>
                    <div class = "media-content">
                        <p class = "title is-4">{this.props.set.name}</p>
                        <p class = "subtitle is-6">{'Released ' + this.props.set.releaseDate}</p>
                    </div>
                </div>
                <div class = "content">
                    <ul>
                        {this.standardLegal()}
                        {this.expandedLegal()}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Sets;
