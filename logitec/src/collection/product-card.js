import { Link } from "react-router-dom";

export default function ProductCard({ product }){
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            {product.title}
          </text>
        </svg>

        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link
                to={"/collection/" + product.category.toLowerCase() +"/"+  product.link}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Add
              </button>
            </div>
            <small className="text-muted">Rs. {product.prices[0].price}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
