//Global querySelectors/getElementByIds

const domUpdates = {

    displayCustomerInfo(customerData) {
      reservationHistoryBackground.innerHTML = ' ';
      customerData.forEach(currentBooking => {
        console.log("currentBooking:", currentBooking)
        reservationHistoryBackground.innerHTML += `
        <article class="card">
          <section class="card-header">
              <p class="room-label">Room Number</p>
              <p class="room-value" id="roomNumber">${currentBooking[1].number}</p>
          </section>
            <p class="reservation-date" id="roomReservationDate" aria-label="Reservation Date">${currentBooking[0]}</p>
            <p class="reservation-label">Reservation Date</p>
          <section class="cost-label">
            <p class="cost-value" id="roomCost" aria-label="Cost Per Night">${currentBooking[1].costPerNight} Per Night</p>
          </section>
            <p class="detail-label">Room Type</p>
            <p class="detail-value" id="roomType">${currentBooking[1].roomType}</p>
            <p class="detail-label">Number of Beds</p>
            <p class="detail-value" id="roomNumberOfBeds">${currentBooking[1].numBeds}</p>
            <p class="detail-label">Bidet</p>
            <p class="detail-value" id="roomBidet">${currentBooking[1].bidet}</p>
        </article>`
      })
    },
}

export default domUpdates;