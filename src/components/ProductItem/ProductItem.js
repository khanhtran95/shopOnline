import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product, index}= this.props;
        var trangThai = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <th>{index +1}</th>
                <th>{product.id}</th>
                <th>{product.name}</th>
                <th>{product.price}</th>
                <th>
                    <span className={`label label-${statusClass}`}>
                    {trangThai}
                    </span>
                </th>
                <th>{product.image}</th>
                <th>                                                    
                    <button type="button" className="btn btn-success">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                </th>
            </tr>
        );
    }
}

export default ProductItem;
