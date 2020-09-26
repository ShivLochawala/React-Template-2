import React, {Component} from 'react';
import News from './News';

class NewsItem extends Component{

    render(){
        return(
            <div className="col-lg-4 col-md-6">
                <div className="blog-item set-bg" style={{ backgroundImage: `url(${this.props.bg})`}} data-setbg="img/blog/blog-1.jpg">
                    <div className="bi-text">
                        <span className="b-tag">{this.props.title}</span>
                        <h4><a href="./blog-details.html">{this.props.subtitle}</a></h4>
                        <div className="b-time"><i className="icon_clock_alt"></i>{this.props.date}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewsItem;