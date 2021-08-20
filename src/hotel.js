class Hotel {
  constructor(rooms, bookings, customers) {
    this.rooms = rooms;
    this.bookings = bookings;
    this.customers = customers;
    this.searchDate = '';
    this.availableRooms = [];
    this.roomSearchResults = [];
    this.roomSearchResultsByDateRequested = [];
    this.requestedRoom = [];
    // this.formattedDate = formatDate(this.searchDate)

  }

  findAvailableRooms(date) {
    this.searchDate = date;

    const takenRooms = this.bookings.bookings.filter(currentBooking => currentBooking.date === date)
    const takenRoomNumbers = takenRooms.map(currentRoom => currentRoom.roomNumber);
    let foundRooms = this.rooms.rooms.reduce((availableRooms, room) => {
      if (!takenRoomNumbers.includes(room.number)) {
        availableRooms.push([date, room])
      }
      return availableRooms
    }, [])
    this.availableRooms = foundRooms;

    return this.availableRooms;

  }

  filterSearchResults(searchData) {
    this.findAvailableRooms(this.searchDate);
    const searchResults = this.availableRooms.filter(currentRoom =>
      currentRoom[1].roomType === searchData.roomType)

    this.roomSearchResults = searchResults;

    return this.roomSearchResults;

  }

  requestRoom(roomNumber) {
    this.requestedRoom = this.availableRooms.find(currentRoom => {
      return currentRoom[1].number === roomNumber
    });
    console.log('room requested for booking', this.requestedRoom)
    return this.requestedRoom;
  }







}

export default Hotel
