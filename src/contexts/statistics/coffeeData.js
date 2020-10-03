const CoffeeData = (firebase) => {
  const userID = 'userID';
  let state = []

    console.log("fetching all cups");

    return firebase.state.firebase.database().ref(
        'Coffee/Users/' + userID + '/Entries').once('value').then( res => {
      res.forEach((childNode) => {
        state.push({
          type: childNode.val().type,
          date: childNode.val().date,
          time: childNode.val().time
        })
      });
      return state;
    });
};

export default CoffeeData;