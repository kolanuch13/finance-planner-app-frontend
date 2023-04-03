import ReactPaginate from 'react-paginate';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import css from './Pagination.module.css';

const Pagination = ({ actualPage, totalPage, page }) => {
  const handlePageClick = event => {
    actualPage(event.selected + 1);
    localStorage.setItem('page', event.selected + 1);
  };

  return (
    <div className={css.paginateWrapper}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<AiOutlineRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={totalPage}
        previousLabel={<AiOutlineLeft />}
        renderOnZeroPageCount={null}
        forcePage={page ? page - 1 : 0}
      />
    </div>
  );
};

export default Pagination;
