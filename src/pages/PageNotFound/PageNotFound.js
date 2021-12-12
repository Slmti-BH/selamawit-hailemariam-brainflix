import {Link} from "react-router-dom";

function PageNotFound (){
    return (
      <div>
        <h1>PAGE NOT FOUND</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
}

export default PageNotFound;