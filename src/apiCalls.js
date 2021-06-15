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
  if (!response.ok) {
    throw new Error('Something went wrong, please try again,')
  } else {
    return response.json()
  }
}

function addNewBooking(customerID, date, roomNumber) {
  return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userID: customerID,
        date: date,
        roomNumber: roomNumber
      })
    })
    .then(response => checkForError(response))
    .then(response => console.log(response))
    .catch(error => console.error(`POST Request Error: ${error.message}`))

}

const retrieveData = () => {
  return Promise.all([fetchCustomerData(), fetchRoomData(), fetchBookingData()])
}

export default {fetchCustomerData, fetchRoomData, fetchBookingData, retrieveData, addNewBooking}
