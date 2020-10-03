import React from 'react';

const CoffeeDataContext = React.createContext({
  data: {
    type: "default",
    time: "06:09",
    date: "04/20/1969"
  }
});

export default CoffeeDataContext;