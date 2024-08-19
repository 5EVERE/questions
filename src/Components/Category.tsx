import { Link } from 'react-router-dom';

const Category = function (props: any) {
  return (
    <Link to={`/categories/${props.category}`} className="category">
      {props.category}
    </Link>
  );
};
export default Category;
