import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/products";
// import "./product.css";

function Product() {
  let { productLink } = useParams();
  let [product, setProduct] = useState(() => api.getProductByLink(productLink));

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState("BLUE");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [warrenty, setWarrenty] = useState("7 Days Replacement");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!product) return;

    var myCarousel = document.getElementById("carouselExampleIndicators");
    myCarousel.addEventListener("slid.bs.carousel", function (event) {
      console.log("current slide index ", event.to);
      setSelectedImgIndex(event.to);
    });
  }, []);

  if (!product) return <h1> No product with the given link </h1>;

  const { variations } = product;
  const { prices } = product;

  const images = variations.map((i) => i.image);
  const thumbnails = variations.map((t) => t.thumbnail);
  const ic = variations.map((ic) => ic.icon);
  const c = variations.map((c) => c.color);
  const s = variations.map((s) => s.stock);

  return (
      <div className="container">
        <div class="mt-5">
          <div className="row">
            {/* left column */}

            <div className="col-sm-6 col-md-6 col-lg-6">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="false"
                data-bs-slide="false"
                data-bs-wrap="false"
                data-bs-pause="false"
              >
                <div class="carousel-inner">
                  {images.map((img, index) => (
                    <div
                      class={
                        index === selectedImgIndex
                          ? "carousel-item active"
                          : "carousel-item"
                      }
                    >
                      <img
                        src={img}
                        class="d-block w-100"
                        alt="large prodcut image"
                      />
                    </div>
                  ))}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-evenly" }}
              >
                {thumbnails.map((thumbnail, index) => (
                  <img
                    className={
                      index === selectedImgIndex
                        ? "border border-danger"
                        : "border border-light"
                    }
                    src={thumbnail}
                    onClick={() => setSelectedImgIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* right column */}

            <div className="col-sm-6 col-md-6 col-lg-6">
              <h2>{product.title}</h2>
              <a href="url">logitech</a>
              <br />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="yellow"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="yellow"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="yellow"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="yellow"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="yellow"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="yellow"
                  class="bi bi-star-half"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                </svg>
                6 reviews
              </span>
              <h6>
                Availability :{" "}
                {s.map((s, index) => (index === selectedImgIndex ? s : null))}
              </h6>
              <hr />
              <h1>
                Rs.
                {prices.map((p, index) => p.warranty === warrenty && p.price)}
              </h1>
              <h5>Available Options</h5>
              <h6>
                <span className="">COLOR: </span>
                <span className="danger">
                  {c.map((c, index) => (index === selectedImgIndex ? c : null))}
                </span>
              </h6>

              <div className="d-flex mt-3" style={{ alignContent: "left" }}>
                {ic.map(
                  (i, index) =>
                    i && (
                      <img
                        width="60px"
                        height="50px"
                        className={c.map((c, index) =>
                          selectedIcon === index
                            ? "border border-danger rounded-circle"
                            : "border border-grey rounded-circle"
                        )}
                        src={i}
                        onClick={() => setSelectedImgIndex(index)}
                      />
                    )
                )}
              </div>

              <div class="warranty mt-3">
                <label for="single-option-selector-1" className="h6">
                  Select Warranty:
                </label>
                <br />
                <select
                  class="single-option-selector"
                  onChange={(e) => setWarrenty(e.target.value)}
                >
                  {prices.map((p) => (
                    <option value={p.warranty}>{p.warranty}</option>
                  ))}
                </select>
              </div>

              <div class="add-cart-wrapper mt-3">
                <div class="quantity-wrapper">
                  <span class="text-weight-bolder h6">QTY</span>
                  <div class="quantity">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        class="btn"
                        onClick={() => setCounter(counter - 1)}
                      >
                        -
                      </button>
                      <button class="btn ">{counter}</button>
                      <button
                        class="btn"
                        onClick={() => setCounter(counter + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="ADD TO CART"
                  class="button-cart w-100"
                />
              </div>

              <button className="about-product w-100 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                ASK ABOUT THIS PRODUCT
              </button>
              <div className="wishlit  mt-3">
                <a href="url" className="text-muted">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                  Add to wishlist
                </a>
                <a
                  style={{ marginLeft: "120px" }}
                  href="url"
                  className="text-muted"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    class="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                  Browse compare
                </a>
              </div>
            </div>
          </div>

          {/* tab layout */}
          {/* <div id="tabs" className="htabs text-center mt-5">
        <a href="#tab-description" class="selected ">
          Description
        </a>
        <a href="#tab-review" id="product-reviews-a" class="">
          Reviews
        </a>
      </div> */}
        </div>
      </div>
  );
}

export default Product;
