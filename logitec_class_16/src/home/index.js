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
        <div className="container marketing">
          <div className="row">
            {
              categories.map(category => 
              <div className="col-lg-4" key={category}>
                <CollectionCircle category={category}/>
              </div>)
            }
          </div>
          <hr className="featurette-divider" />
          {
            [1,2,3].map(x => <FeatureRow key={x} row={x}/>)
          }
        </div>        
      </main>
  );
}