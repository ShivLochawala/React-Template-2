import React, {Component} from 'react';
import NewsItem from './NewsItem';

import bg1 from '../Assets/blog/blog-1.jpg';
import bg2 from '../Assets/blog/blog-2.jpg';
import bg3 from '../Assets/blog/blog-3.jpg';
import bg4 from '../Assets/blog/blog-4.jpg';
import bg5 from '../Assets/blog/blog-5.jpg';
import bg6 from '../Assets/blog/blog-6.jpg';
import bg7 from '../Assets/blog/blog-7.jpg';
import bg8 from '../Assets/blog/blog-8.jpg';
import bg9 from '../Assets/blog/blog-9.jpg';

const news = [
    {title:"Travel Trip", subtitle:"Tremblant In Canada", date:" 15th April, 2019", bg:bg1},
    {title:"Camping", subtitle:"Choosing A Static Caravan", date:" 15th April, 2019", bg:bg2},
    {title:"Event", subtitle:"Copper Canyon", date:" 21th April, 2019", bg:bg3},
    {title:"Trivago", subtitle:"A Time Travel Postcard", date:" 22th April, 2019", bg:bg4},
    {title:"Camping", subtitle:"A Time Travel Postcard", date:" 25th April, 2019", bg:bg5},
    {title:"Travel Trip", subtitle:"Virginia Travel For Kids", date:" 28th April, 2019", bg:bg6},
    {title:"Travel Trip", subtitle:"Bryce Canyon A Stunning", date:" 29th April, 2019", bg:bg7},
    {title:"Event & Travel", subtitle:"Motorhome Or Trailer", date:" 30th April, 2019", bg:bg8},
    {title:"Camping", subtitle:"Lost In Lagos Portugal", date:" 30th April, 2019", bg:bg9}

];
class News extends Component{

    render(){
        return(
            <>
            <hr/>
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>News</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog-section blog-page spad">
                <div className="container">
                    <div className="row">
                        {news.map((item, index)=>{
                            return <NewsItem {...item} key={index}/>
                        })}
                        <div className="col-lg-12">
                            <div className="load-more">
                                <a href="#" className="primary-btn">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default News;