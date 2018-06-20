import React, { Component } from 'react';

class HomeItem extends Component {
    render() {
        var { product}= this.props;
        var trangThai = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <a  className="thumbnail">
                <img alt={product.name} src={product.image} />
                <h4>{product.name}</h4>
                <h5>Giá: {product.price} đ</h5>
                
                <span className={`label label-${statusClass}`}>
                {trangThai}
                </span>
                <br/>
                
                    
                                                                    
                <button type="button" className="btn btn-success">Mua hàng</button>
                <button type="button" className="btn btn-danger">Thêm vào giỏ</button>
                </a>
            </div>
            
        );
    }
}

export default HomeItem;
