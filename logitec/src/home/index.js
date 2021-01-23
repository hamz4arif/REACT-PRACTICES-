import {useState} from 'react';
import TopCarousel from "./top-carousel";
import CollectionCircle from './collection-circle';
import FeatureRow from "./feature-row";
import api from '../api/catogories';
import "./home.css";

export default function Home() {
  const [categories,] = useState(() => api.getAllCategories());

  return (
      <main>
        <TopCarousel />

        {/* Marketing messaging and featurettes 
  Wrap the rest of the page in another container to center all the content. */}

        <div className="container marketing">
          {/* Three columns of text below the carousel */}
          <div className="row">
            {
              categories.map(category => 
              <div className="col-lg-4" key={category}>
                <CollectionCircle category={category}/>
              </div>)
            }
          </div>
          {/* /.row */}

          {/* START THE FEATURETTES */}

          <hr className="featurette-divider" />
          
          <FeatureRow />
          <hr className="featurette-divider" />
          <FeatureRow />
          <hr className="featurette-divider" />
          <FeatureRow />
          <hr className="featurette-divider" />

          {/* END THE FEATURETTES */}
        </div>
        {/* End .container */}
        
      </main>
  );
}