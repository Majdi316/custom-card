const normalizeUpdateUser = (userDetails) => {
  const userDetailsForServer = {
    name: {
      first: userDetails.first,
      middle: userDetails.middle,
      last: userDetails.last,
    },
    phone: userDetails.phone,
    image: {
      url: userDetails.url,
      alt: userDetails.alt,
    },
    address: {
      state: userDetails.state,
      country: userDetails.country,
      city: userDetails.city,
      street: userDetails.street,
      houseNumber: userDetails.houseNumber,
      zip: userDetails.zip,
    },
  };

  return userDetailsForServer;
};

export default normalizeUpdateUser;
