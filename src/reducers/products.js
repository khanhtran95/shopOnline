var initialState = [
    {
        id: 1,
        name: 'Samsung Galaxy S7 Edge',
        price: 6790000,
        status: true,
        image: 'https://hungmobile.vn/images/galaxy-s7-edge-my(mau-01)_590b11c65082e_04_05_2017_18_34_30.jpg'
    },
    {
        id: 2,
        name: 'Apple iPhone 6s',
        price: 5430000,
        status: true,
        image: 'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6s-16gb-lock-nhat-vang-cu-didongviet.jpg'
    }
];

const products = (state = initialState,action) => {
    switch(action.type) {
        default: return [...state];
    }
};

export default products;