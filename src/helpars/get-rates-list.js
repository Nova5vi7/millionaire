const getRatesList = (questions) => {
  const numbersRatesList = questions.reduce((accum, { value }) => {
    const currentValue = !accum.length
      ? value
      : accum[accum.length - 1] + value;
    accum.push(currentValue);
    return accum;
  }, []);

  return numbersRatesList.map((rate) => rate.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  }));
};

export default getRatesList;
