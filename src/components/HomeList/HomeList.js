import React, { Component } from 'react';


class HomeList extends Component {
    render() {
        return (
            <div>  
                             
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                    </div>
                    
                    {this.props.children}
                </div>
                
            </div>
        );
    }
}

export default HomeList;
