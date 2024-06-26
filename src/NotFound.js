import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry!!</h2>
      <p>That page you're looking for cannot be found.</p>
      <Link to="/">Go back to home page...</Link>
    </div>
  );
}
 
export default NotFound;