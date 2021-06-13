class Customer {
  constructor(info) {
    this.id = info.id;
    this.name = info.name;
    this.bookingHistory = [];
    this.roomHistory = [];
    this.expenseTotal = 0;
  }

  findBookingHistory(bookingData) {
    //console.log('booking data?', bookingData)
    this.bookingHistory = bookingData.bookings.filter(booking => booking.userID === this.id).sort().reverse();
    return this.bookingHistory;
  }

  findRoomHistoryWithDate(bookingData, roomData) {
    const roomHistoryWithDates = this.findBookingHistory(bookingData).map(currentBooking => {
      const matchCustomerRooms = roomData.rooms.find(currentRoom => currentRoom.number === currentBooking.roomNumber)
      const roomWithDate = [currentBooking.date, matchCustomerRooms]

      return roomWithDate
    });

    this.roomHistory = roomHistoryWithDates.sort().reverse()
    // console.log(this.roomHistory)
    return this.roomHistory;
  }

  findExpenseTotal(bookingData, roomData) {
    // Not letting me us the functions I wrote above to dry this up
    // Not able to access bookingData.bookings when I call the functions above?
    // this.findBookingHistory()
    // this.findRoomHistoryWithDate();
    const bookingHistory = bookingData.bookings.filter(booking => booking.userID === this.id);
    bookingHistory.forEach(booking => {
      roomData.rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          this.expenseTotal += room.costPerNight
        }

      })
      this.expenseTotal = parseFloat(this.expenseTotal.toFixed(2))
    })


  }


}



export default Customer;
