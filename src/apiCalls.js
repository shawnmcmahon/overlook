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

function addNewBooking(bookingData, roomData, booking) {
  return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(booking)
    })
    .then(response => checkForError(response))
    .catch(error => console.error(`POST Request Error: ${error.message}`))

}

const retrieveData = () => {
  return Promise.all([fetchCustomerData(), fetchRoomData(), fetchBookingData()])
}

export default {fetchCustomerData, fetchRoomData, fetchBookingData, retrieveData, addNewBooking}
