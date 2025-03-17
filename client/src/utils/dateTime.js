// export const fromIsoDate = (isoDate) => {
//   const date = new Date(isoDate);

//   const formattedDate = date.toLocaleString("en-US", {
//     // year: "2-digit",
//     month: "short",
//     day: "numeric",
//   });

//   return formattedDate;
// };
export const fromIsoTime = (isoTime) => {
  const formattedTime = isoTime.match(/\d\d:\d\d/);

  return formattedTime[0];
};
export const fromIsoDate = (isoDate) => {
  const date = new Date(isoDate);

  const formattedDate = date.toISOString().substring(0, 10);

  return formattedDate;
};
export const toShortDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "2-digit",
  });

  return formattedDate;
};
