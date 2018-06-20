import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import axios from 'axios';

class ProductListPage extends Component {
    constructor (props){
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        
        axios({
            method: 'GET',
            url: 'http://localhost:3000/products',
            data: null
        }).then(res => {
            
            this.setState({
                products: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        
        var {products} = this.state;
        
        
        

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info">
                    Thêm sản phẩm
                </button>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
            
        );
        
    }
    showProducts  (products)  {
        var result =  null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key = {index}
                        product = {product}
                        index={index}
                    />
                );
            });
        
        }
        return result;
    }

    
}

const mapStateToProps = state => {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps, null)(ProductListPage);