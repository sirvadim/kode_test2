import React, { Component } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom'
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
    return (
      <Link style={{ textDecoration: 'none' }} className = "set hvr-grow" to = {`/cards?setCode=${this.props.set.code}`}>
        <div>
            <div className = "content-image">
                <img className = "set-image" src={this.props.set.logo} alt={this.props.set.name}/>
            </div>
            <div className = "set-content">
                <div className = "media">
                    <div className = "media-left">
                        <figure className = "image is-48x48">
                            <img className = "set-image" src={this.props.set.symbolUrl} alt=""/>
                        </figure>
                    </div>
                    <div className = "media-content">
                        <p className = "title is-4">{this.props.set.name}</p>
                        <p className = "subtitle is-6">{'Released ' + this.props.set.releaseDate}</p>
                    </div>
                </div>
                <div className = "content">
                    <ul>
                        {this.standardLegal()}
                        {this.expandedLegal()}
                    </ul>
                </div>
            </div>
        </div>
      </Link>
    );
  }
}

export default Sets;
