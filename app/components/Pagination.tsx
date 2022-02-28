import { Link } from 'remix';

function Pagination({ page, arr_pages }: { page: number; arr_pages: number[] }) {
  return (
    <div className="flex justify-center mb-10 btn-group">
      {arr_pages.map((item) => (
        <Link key={item} to={`/?page=${item + 1}`} className={`btn btn-sm ${item + 1 === +page && 'btn-active'}`}>
          {item + 1}
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
