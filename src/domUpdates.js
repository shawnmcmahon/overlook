//Global querySelectors/getElementByIds
let card = document.getElementById('card');


const domUpdates = {
  displayHeaderInfo(customer, todaysDate) {
    welcome.innerHTML = `Welcome, ${customer.name}`;
    expenseHistory.innerHTML = `Total Spent: ${customer.expenseTotal}`;
    date.innerHTML =`Today is ${todaysDate}`;


  },

  displayCustomerInfo(customerData) {
    reservationHistoryBackground.innerHTML = ' ';
    customerData.forEach(currentBooking => {
      reservationHistoryBackground.innerHTML += `
      <article class="card" id="card">
        <section class="card-header">
            <p class="room-label">Room Number</p>
            <p class="room-value" id="roomNumber" aria-label="Room Number">${currentBooking[1].number}</p>
        </section>
          <p class="reservation-date" id="roomReservationDate" aria-label="Reservation Date">${currentBooking[0]}</p>
          <p class="reservation-label">Reservation Date</p>
        <section class="cost-label">
          <p class="cost-value" id="roomCost" aria-label="Cost Per Night">$${currentBooking[1].costPerNight} Per Night</p>
        </section>
          <p class="detail-label">Room Type</p>
          <p class="detail-value" id="roomType" aria-label="Room Type">${currentBooking[1].roomType}</p>
          <p class="detail-label">Number of Beds</p>
          <p class="detail-value" id="roomNumberOfBeds" aria-label="Number of Beds per Room">${currentBooking[1].numBeds}</p>
          <p class="detail-label">Bidet</p>
          <p class="detail-value" id="roomBidet" aria-label="Room Bidet Present">${currentBooking[1].bidet}</p>
      </article>`
    })
  },

  displayAvailableRooms(hotel, todaysDate) {
    availableRoomsBackground.innerHTML = ' ';
    hotel.findAvailableRooms(todaysDate);
    hotel.availableRooms.forEach(currentRoom => {
      availableRoomsBackground.innerHTML += `
      <article class="card" id="${currentRoom[1].number}">
        <section class="card-header">
            <p class="room-label">Room Number</p>
            <p class="room-value" id="roomNumber" aria-label="Room Number">${currentRoom[1].number}</p>
        </section>
          <p class="reservation-date" id="roomReservationDate" aria-label="Reservation Date">${currentRoom[0]}</p>
          <p class="reservation-label">Reservation Date</p>
        <section class="cost-label">
          <p class="cost-value" id="roomCost" aria-label="Cost Per Night">$${currentRoom[1].costPerNight} Per Night</p>
        </section>
          <p class="detail-label">Room Type</p>
          <p class="detail-value" id="roomType" aria-label="Room Type">${currentRoom[1].roomType}</p>
          <p class="detail-label">Number of Beds</p>
          <p class="detail-value" id="roomNumberOfBeds" aria-label="Number of Beds per Room">${currentRoom[1].numBeds}</p>
          <p class="detail-label">Bidet</p>
          <p class="detail-value" id="roomBidet" aria-label="Room Bidet Present">${currentRoom[1].bidet}</p>
      </article>`
    })

  },

  displaySearchResults(hotel, searchData) {
    hotel.findAvailableRooms(searchData.date);
    hotel.filterSearchResults(searchData);
    availableRoomsBackground.innerHTML = ' ';
    hotel.roomSearchResults.forEach(currentRoom => {
      availableRoomsBackground.innerHTML += `
      <article class="card" id="${currentRoom[1].number}" dataset-id="${currentRoom[1].number}">
        <section class="card-header" id="${currentRoom[1].number}card-header">
            <p class="room-label">Room Number</p>
            <p class="room-value" id="${currentRoom[1].number}" aria-label="Room Number">${currentRoom[1].number}</p>
        </section>
          <p class="reservation-date" id="roomReservationDate" aria-label="Reservation Date">${currentRoom[0]}</p>
          <p class="reservation-label">Reservation Date</p>
        <section class="cost-label">
          <p class="cost-value" id="roomCost" aria-label="Cost Per Night">$${currentRoom[1].costPerNight} Per Night</p>
        </section>
          <p class="detail-label">Room Type</p>
          <p class="detail-value" id="roomType" aria-label="Room Type">${currentRoom[1].roomType}</p>
          <p class="detail-label">Number of Beds</p>
          <p class="detail-value" id="roomNumberOfBeds" aria-label="Number of Beds per Room">${currentRoom[1].numBeds}</p>
          <p class="detail-label">Bidet</p>
          <p class="detail-value" id="roomBidet" aria-label="Room Bidet Present">${currentRoom[1].bidet}</p>
      </article>`


    })
  },

  displaySelectedCard() {

  },

  displayLogInSuccess() {
    let dashboard = document.getElementById('dashboard');
    let loginForm = document.getElementById('loginForm');
    loginForm.classList.add('hidden');
    dashboard.classList.remove('hidden');

  },

  displayLogInError() {
    let displayError = document.getElementById('displayError');
    displayError.classList.remove('hidden');

  }
}

export default domUpdates;
