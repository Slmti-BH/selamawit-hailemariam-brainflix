import {Link} from "react-router-dom";
import "./PageNotFound.scss";

function PageNotFound (){
    return (
      <div className="page-not-found">
        <h1 className="page-not-found__title">PAGE NOT FOUND</h1>
        <Link to="/">
          <button className="page-not-found__btn">Home</button>
        </Link>
      </div>
    );
}

export default PageNotFound;