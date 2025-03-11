import React from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import styles from "./assets/Pagination.module.css";

export default function Pagination({
  totalEvents,
  eventsPerPage,
  showCurrentPage,
  currentPage,
}) {
  const [searchParams] = useSearchParams();

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pages.push(i);
  }
  useEffect(() => {
    const filter = Object.fromEntries(searchParams);
    if (filter.page) {
      showCurrentPage(filter.page);
    } else {
      showCurrentPage(1);
    }
  }, [searchParams]);

  return (
    <div className={styles["pagination"]}>
      {pages.map((page, index) => {
        return (
          <Link
            to={`?page=${page}`}
            key={index}
            onClick={() => showCurrentPage(page)}
            className={page == currentPage ? styles["active"] : ""}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
