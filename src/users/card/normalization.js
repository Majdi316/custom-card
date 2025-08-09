const normalizeCard = (cardDetails) => {
  const cardDetailsForServer = {
    title: cardDetails.title,
    subtitle: cardDetails.subtitle,
    description: cardDetails.description,
    phone: cardDetails.phone,
    web:cardDetails.web,
    email: cardDetails.email,
    image: {
      url: cardDetails.url,
      alt: cardDetails.alt,
    },
    address: {
      state: cardDetails.state,
      country: cardDetails.country,
      city: cardDetails.city,
      street: cardDetails.street,
      houseNumber: cardDetails.houseNumber,
      zip: cardDetails.zip,
    },
  };

  return cardDetailsForServer;
};

export default normalizeCard;
