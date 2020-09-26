import React, {Component} from 'react';
class RoomsItem extends Component{

    render(){
        return(
            <>
            <div className="col-lg-4 col-md-6">
                <div className="room-item">
                    <img src={this.props.img} alt=""/>
                    <div className="ri-text">
                        <h4>{this.props.title}</h4>
                        <h3>{this.props.price}<span>/Pernight</span></h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="r-o">Size:</td>
                                    <td>{this.props.size}</td>
                                </tr>
                                <tr>
                                    <td className="r-o">Capacity:</td>
                                    <td>{this.props.capacity}</td>
                                </tr>
                                <tr>
                                    <td className="r-o">Bed:</td>
                                    <td>{this.props.bed}</td>
                                </tr>
                                <tr>
                                    <td className="r-o">Services:</td>
                                    <td>{this.props.services}</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="#" className="primary-btn">More Details</a>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default RoomsItem;