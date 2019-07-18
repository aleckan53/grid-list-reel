const sortBy = {
  name: (a, b, DSC) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    return order(nameA, nameB, DSC);  
  },
  price(a, b, DSC) {
    const priceA = a.total;
    const priceB = b.total;

    return order(priceA, priceB, DSC);
  },
  progress(a, b, DSC) {
    const progA = a.percentSaved;
    const progB = b.percentSaved;

    return order(progA, progB, DSC);
  },
  perDay(a, b, DSC) {
    const dayA = a.perDay;
    const dayB = b.perDay;

    return order(dayA, dayB, DSC);
  },
};

const order = (a, b, descending=true) => {
  if(descending) {
    return (
      a < b ? -1 :
      a > b ? 1 :
      0
    );  
  } else {
    return (
      a < b ? 1 :
      a > b ? -1 :
      0
    );  
  }

}

export default sortBy;