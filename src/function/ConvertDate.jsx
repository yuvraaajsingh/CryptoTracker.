const ConvertDate = (number) => {
  const date = new Date(number);
  return date.getDate() + "/" + (date.getMonth() + 1);
};

export default ConvertDate;
