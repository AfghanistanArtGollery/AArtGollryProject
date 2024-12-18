import UserPanelLayout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/wishlist.module.css";
import Product from "@/components/templates/p-user/whishlist/Product";

import connectToDB from "@/configs/db";
import { authUser } from "@/utils/AuthHelper";
import WishlistModel from "@/models/Wishlist";


const page = async () => {

    // Connect to DB
    await connectToDB();

    // Authenticate the user
    const user = await authUser();

    // Fetch the wishlist from the database and populate the product
    const wishlist = await WishlistModel.find({ user: user._id }).populate('product');


    return (
        <UserPanelLayout>
            <main>
                <h1 className={styles.title}>
                    <span>Wishlist</span>
                </h1>

                <div className={styles.container}>
                    {wishlist.length > 0 ? (
                        wishlist.map(wish => (
                            <Product
                                key={wish._id}
                                productID={String(wish.product._id)}
                                score={wish.product.score} 
                                name={wish.product.name} 
                                images={wish.product.images}
                                price={wish.product.price}  // Pass individual properties from wish.product
                            />
                        ))
                    ) : (
                        <p className={styles.empty}>No Artwork found</p>
                    )}
                </div>
            </main>
        </UserPanelLayout>
    );
};

export default page;
