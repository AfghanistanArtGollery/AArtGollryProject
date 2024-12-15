// import { useState } from "react"
// import connectToDB from "@/configs/db"
// import model from "@/models/ArtWork"
// const AddtoCart = (ID) => {

//     const [count, setCount] = useState(1)
//        const ProductID=ID
//     const addToCart = (ProductID) => {

//         const cart = JSON.parse(localStorage.getItem('cart')) || []


//         if (cart.length) {
//             const isCart = cart.some(item => item.id == artwork._id)
//             // if (isCart) {
//             //   cart.forEach((item) => {
//             //     if (item.id === artwork._id) {
//             //       item.count = item.count + count
//             //     }
//             //   })

//             localStorage.setItem('cartart', JSON.stringify(cart))

//             //  }
//         } else {
//             const cartItem = {
//                 id: ProductID,
//                 // name: artwork.name,
//                 // img: artwork.images,
//                 // price: artwork.price,
//                 count,
//             }
//             cart.push(cartItem)
//             localStorage.setItem('cartart', JSON.stringify(cart))

//         }



//     }

//     return addToCart;

// }
// export default AddtoCart