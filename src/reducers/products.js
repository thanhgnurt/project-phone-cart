var initialState = [
    {
        id : 1,
        name : "Iphone 7 plus",
        image : "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-256gb-didongviet_2.jpg",
        description : "Made by Apple",
        price : 600,
        inventory : 8,
        rating : 3.5
    
    },
    {
        id : 2,
        name : "SamSung Galaxy Note 10",
        image : "https://cdn.fptshop.com.vn/Uploads/Originals/2020/3/12/637196211718019710_ss-a51-xanh-1.png",
        description : "Made by SamSung",
        price : 550,
        inventory : 14,
        rating : 4.5
    
    },
    {
        id : 3,
        name : "Hawei P20 pro",
        image : "https://img3.bgxcdn.com/thumb/large/oaupload/ser1/banggood/images/53/67/d9367577-b67b-46eb-8bb1-fdb297516933.jpg",
        description : "Made by Hawei",
        price : 500,
        inventory : 6,
        rating : 3
    
    },
]
const products = (state = initialState, action) => {
    switch (action.type) {
        
        default:
           return [...state]
    }
}
export default products