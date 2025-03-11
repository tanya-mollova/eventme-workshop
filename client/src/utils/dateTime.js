export const fromIsoDate = (isoDate) => {
  const date = new Date(isoDate);

  const formattedDate = date.toLocaleString("en-US", {
    // year: "2-digit",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};
export const toShortDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return formattedDate;
};
