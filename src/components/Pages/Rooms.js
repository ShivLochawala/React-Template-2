import React, {Component} from 'react';
import RoomsItem from './RoomsItem';

import img1 from '../Assets/room/room-1.jpg';
import img2 from '../Assets/room/room-2.jpg';
import img3 from '../Assets/room/room-3.jpg';
import img4 from '../Assets/room/room-4.jpg';
import img5 from '../Assets/room/room-5.jpg';
import img6 from '../Assets/room/room-6.jpg';

const items = [
    {title:"Premium King Room", price:"159$", size:"30 ft", capacity:"Max persion 3", bed:"King Beds", services: "Wifi, Television, Bathroom,...", img: img1 },
    {title:"Deluxe Room", price:"159$", size:"30 ft", capacity:"Max persion 5", bed:"King Beds", services: "Wifi, Television, Bathroom,...", img: img2 },
    {title:"Double King Room", price:"159$", size:"30 ft", capacity:"Max persion 2", bed:"King Beds", services: "Wifi, Television, Bathroom,...", img: img3 },
    {title:"Luxury King Room", price:"159$", size:"30 ft", capacity:"Max persion 1", bed:"King Beds", services: "Wifi, Television, Bathroom,...", img: img4 },
    {title:"Room With View", price:"159$", size:"30 ft", capacity:"Max persion 1", bed:"King Beds", services: "Wifi, Television, Bathroom,...", img: img5 },
    {title:"Small View", price:"159$", size:"30 ft", capacity:"Max persion 2", bed:"King Beds", services: "Wifi, Television, Bathroom,...", img: img6 },

];

class Rooms extends Component{

    render(){
        return(
            <>
            <hr/>
            <div className="breadcrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <h2>Our Rooms</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="rooms-section spad">
                <div className="container">
                    <div className="row">
                        {items.map((item, index)=>{
                            return <RoomsItem {...item} key={index}/>
                        })}
                    </div>
                </div>
            </section>
            </>
        )
    }
}
export default Rooms;