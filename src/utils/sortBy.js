const sortBy = {
  name(a, b, DSC) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    return this._order(nameA, nameB, DSC);
  },
  price(a, b, DSC) {
    const priceA = a.total;
    const priceB = b.total;

    return this._order(priceA, priceB, DSC);
  },
  progress(a, b, DSC) {
    const progA = a.percentSaved;
    const progB = b.percentSaved;

    return this._order(progA, progB, DSC);
  },
  perDay(a, b, DSC) {
    const dayA = a.perDay;
    const dayB = b.perDay;

    return this._order(dayA, dayB, DSC);
  },
  _order(a, b, descending) {
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
};

export default sortBy;