import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class CategoryWidget extends Component{
    render(){
        return(
            <div className="card category-widget">
            <div className="card-header">
                <h4 className="card-title">Blog Categories</h4>
            </div>
            <div className="card-body">
                <ul className="categories">
                    <li><Link>Cardiology <span>(62)</span></Link></li>
                    <li><Link>Health Care <span>(27)</span></Link></li>
                    <li><Link>Nutritions <span>(41)</span></Link></li>
                    <li><Link>Health Tips <span>(16)</span></Link></li>
                    <li><Link>Medical Research <span>(55)</span></Link></li>
                    <li><Link>Health Treatment <span>(07)</span></Link></li>
                </ul>
            </div>
        </div>
        );
    }
}
export default CategoryWidget;