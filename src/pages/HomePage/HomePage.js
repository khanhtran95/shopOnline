import React, { Component } from 'react';
import HomeList from './../../components/HomeList/HomeList';
import HomeItem from './../../components/HomeItem/HomeItem';
import {connect} from 'react-redux';
import axios from 'axios';

class HomePage extends Component {
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
            <div>
                <HomeList>
                    {this.showProducts(products)}
                </HomeList>
            </div>            
        );       
    }
    
    showProducts  (products)  {
        var result =  null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <HomeItem
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

export default connect(mapStateToProps, null)(HomePage);