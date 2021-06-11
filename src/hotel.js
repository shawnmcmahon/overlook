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
}

export default Hotel
