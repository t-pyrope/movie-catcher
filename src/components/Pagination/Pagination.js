import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../ui/buttons/CustomButton';
import './pagination.scss';

// i use this tutorial: https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react
const Pagination = ({
  totalPages, currentPage, setCurrentPage, pageNeighbours,
}) => {
  const [pages, setPages] = useState([]);

  const range = (from, to, step = 1) => {
    let i = from;
    const r = [];
    while (i <= to) {
      r.push(i);
      i += step;
    }
    return r;
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let p = range(startPage, endPage);
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (p.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        p = ['LEFT', ...extraPages, ...p];
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        p = [...p, ...extraPages, 'RIGHT'];
      } else {
        p = ['LEFT', ...p, 'RIGHT'];
      }
      return setPages([1, ...p, totalPages]);
    }
    return setPages(range(1, totalPages));
  };

  useEffect(() => {
    fetchPageNumbers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const goToPage = (page) => {
    const current = Math.max(0, Math.min(page, totalPages));
    setCurrentPage(current);
  };
  const onClick = (page) => {
    goToPage(page);
  };

  const handleMoveLeft = () => {
    goToPage(currentPage - (pageNeighbours * 2) - 1);
  };

  const handleMoveRight = () => {
    goToPage(currentPage + (pageNeighbours * 2) + 1);
  };

  if (totalPages === 1) return null;
  return (
    <>
      <nav aria-label="Pagination" className="pagination">
        <ul className="pagination__list">
          { pages.map((page) => {
            if (page === 'LEFT') {
              return (
                <li key={page} className="pagination__item">
                  <CustomButton
                    onClick={handleMoveLeft}
                    text="..."
                    className="button__pagination"
                  />
                </li>
              );
            }
            if (page === 'RIGHT') {
              return (
                <li key={page} className="pagination__item">
                  <CustomButton
                    onClick={handleMoveRight}
                    text="..."
                    className="button__pagination"
                  />
                </li>
              );
            }

            return (
              <li key={page} className="pagination__item">
                <CustomButton
                  onClick={() => onClick(page)}
                  text={String(page)}
                  className={`button__pagination ${page === currentPage && 'button__pagination_active'}`}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageNeighbours: PropTypes.number,
  setCurrentPage: PropTypes.func.isRequired,
};

Pagination.defaultProps = { pageNeighbours: 2 };

export default Pagination;
