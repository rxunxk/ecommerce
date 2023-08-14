import { useState, useEffect } from "react";
import "../Styles/products.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/products");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await axios
      .delete(`http://localhost:8080/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProducts(products.filter((p) => p._id !== id));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products?.map((product, i) => {
        return (
          <div className="container mt-5" key={i}>
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="image-container">
                    <div className="first">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="discount">
                          {product.discountPercentage}
                        </span>
                        <span
                          className="delete"
                          onClick={() => {
                            deleteProduct(product._id);
                          }}
                        >
                          🗑️
                        </span>
                      </div>
                    </div>

                    <img
                      src={product.thumbnail}
                      className="img-fluid rounded thumbnail-image"
                    />
                  </div>

                  <div className="product-detail-container p-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="dress-name">{product.title}</h5>

                      <div className="d-flex flex-column mb-2">
                        <span className="new-price">{product.price}</span>
                        <small className="old-price text-right">$ 700</small>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-1">
                      <div>
                        <i className="fa fa-star-o rating-star"></i>
                        <span className="rating-number">{product.rating}</span>
                      </div>

                      <span className="buy">BUY +</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
