import React, { useContext } from "react";
import { ProductContext } from "../store/ProductStore";
import { Link } from "react-router-dom";

const Home = () => {
  const { allItems } = useContext(ProductContext);
  return (
    <div className="container-xxl custom-container">
      <main className="my-5">
        <h1>Welcome to ReactShop</h1>
        <br />
        <p>
          Welcome to ReactShop! Discover a wide range of high-quality products
          at unbeatable prices. From the latest gadgets and electronics to
          stylish apparel and home essentials, we have everything you need in
          one place. Enjoy exclusive deals, fast shipping, and top-notch
          customer service. Browse our categories, search for your favorite
          items, and find the perfect products to make your life easier and more
          enjoyable. Your shopping experience is just a click away!
        </p>
        <br />
        <Link to="/products" className="btn btn-primary">
          Go To Products
        </Link>
      </main>
      <section className="items">
        <div className="row home items">
          {allItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4 my-2 p-2 ">
              <div className="card mx-auto w-100 h-100 home-items">
                <img src={item.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title.slice(0, 20)}...</h5>
                  <div className="d-flex justify-content-between">
                    <h5 className="text-muted">{item.category}</h5>
                    <h5 className="text-success">${item.price}</h5>
                  </div>
                  <p className="card-text">
                    {item.description.slice(0, 60)}...
                  </p>
                  <Link
                    to={`/details/${item.id}`}
                    className="btn btn-primary w-100 mx-auto mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
