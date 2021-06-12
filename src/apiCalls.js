const fetchCustomerData = () => {
  return fetch ('http://localhost:3001/api/v1/customers')
    .then(response => checkForError(response))
    .catch(error => console.error(`Customer API Error: ${error.message}`));
}

const fetchRoomData = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => checkForError(response))
    .catch(error => console.error(`Room API Error: ${error.message}`));
}

const fetchBookingData = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => checkForError(response))
    .catch(error => console.error(`Booking API Error: ${error.message}`));
}

const checkForError = (response) => {
  console.log(response)
  if (!response.ok) {
    throw new Error('Something went wrong, please try again,')
  } else {
    return response.json()
  }
}

const retrieveData = () => {
  return Promise.all([fetchCustomerData(), fetchRoomData(), fetchBookingData()])
}

export default {fetchCustomerData, fetchRoomData, fetchBookingData, retrieveData}
