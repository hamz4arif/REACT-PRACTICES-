import { Link } from "react-router-dom";
import {capitalizeFirstLetter} from '../utils/text';

export default function CollectionCircle({category}){
  return (
    <>
      <svg
        className="bd-placeholder-img rounded-circle"
        width="140"
        height="140"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 140x140"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#777" />
        <text x="50%" y="50%" fill="#777" dy=".3em">
          140x140
        </text>
      </svg>

      <h2> {capitalizeFirstLetter(category)} </h2>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <p>
        <Link
          className="btn btn-secondary"
          to={"/collection/" + category}
          role="button"
        >
          View details &raquo;
        </Link>
      </p>
    </>
  );
};
