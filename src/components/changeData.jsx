const ConvertDate = ({ num }) => {
  const month = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mär",
    "04": "Apr",
    "05": "Mai",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Okt",
    11: "Nov",
    12: "Dez",
  };

  return month[num];
};

export default ConvertDate;
