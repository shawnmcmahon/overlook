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

  }

  //Is this returning the rooms it should be?
  findAvailableRooms(date) {
    this.searchDate = date;
    const availableRooms = this.bookings.bookings.filter(currentBooking => currentBooking.date === date)
    const roomNumbers = availableRooms.map(currentRoom => currentRoom.roomNumber);
    let foundRooms = this.rooms.rooms.reduce((availableRooms, room) => {
      if (!roomNumbers.includes(room.number) && !availableRooms.includes(room)) {
        availableRooms.push([date, room])
      }
      return availableRooms
    }, [])

    this.availableRooms = foundRooms;
    return this.availableRooms;
  }

  filterSearchResults(searchData) {
    this.findAvailableRooms(this.searchDate);
    // console.log('availablerooms:', this.availableRooms)
    const searchResults = this.availableRooms.filter(currentRoom =>
      currentRoom[1].roomType === searchData.roomType &&
      (currentRoom[1].bidet === (searchData.bidet === 'true') ||
      searchData.bidet === 'maybe') &&
      currentRoom[1].numBeds == searchData.numBeds);

    this.roomSearchResults = searchResults;
    return this.roomSearchResults;

  }





}

export default Hotel
