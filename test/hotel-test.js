import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/hotel'
import Customer from '../src/customer'
import sampleCustomerData from './sampleCustomerData'
import sampleRoomData from './sampleRoomData'
import sampleBookingData from './sampleBookingData'

describe('Hotel Class', () => {
//Declare variable names here
let customer1, customer2, customer3, hotelCustomers;
let room1, room2, room3, hotelRooms;
let booking1, booking2, booking3, booking4, hotelBookings;
let hotel;
beforeEach(() => {
  hotelCustomers = sampleCustomerData;
  customer1 = new Customer(sampleCustomerData.customers[0]);
  customer2 = new Customer(sampleCustomerData.customers[1]);
  customer3 = new Customer(sampleCustomerData.customers[2]);
  //May need to instanitate hotelCustomers with classes
  //of customers rather than just plain customer data
  // hotelCustomers = {'customers': [
  //   {
  //     customer1 = new Customer(sampleCustomerData[0]);
  //   },
  //   {
  //     customer2 = new Customer(sampleCustomerData[1]);
  //   },
  //   {
  //     customer3 = new Customer(sampleCustomerData[2]);
  //   },
  // ]};
  hotelRooms = sampleRoomData;
  room1 = sampleRoomData.rooms[0];
  room2 = sampleRoomData.rooms[1];
  room3 = sampleRoomData.rooms[2];

  hotelBookings = sampleBookingData;
  booking1 = sampleBookingData.bookings[0];
  booking2 = sampleBookingData.bookings[1];
  booking3 = sampleBookingData.bookings[2];
  booking4 = sampleBookingData.bookings[3];

  hotel = new Hotel(hotelRooms, hotelBookings, hotelCustomers);
})

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  describe('Hotel Properties', () => {

    it('should have a property that contains room data', () => {
      expect(hotel.rooms).to.eql(hotelRooms)
    });

    it('should have a property that contains booking data', () => {
      expect(hotel.bookings).to.eql(hotelBookings)
    });

    it('should have a property that contains customer data', () => {
      expect(hotel.customers).to.eql(hotelCustomers)
    });

    it('should have a property that stores the search date which is a blank string by default', () => {
      expect(hotel.searchDate).to.eql('');
    });

    it('should have a property that stores the available rooms which is an empty array by default', () => {
      expect(hotel.availableRooms).to.eql([]);
    });

    it('should have a property that stores available rooms filtered by search which is an empty array by default', () => {
      expect(hotel.roomSearchResults).to.eql([]);
    });

    it('should have a property that stores roomSearchResults filtered by search date which is an empty array by default' , () => {
      expect(hotel.roomSearchResultsByDateRequested).to.eql([]);
    });

    it('should have a property that stores a requested room which is an empty array by default', () => {
      expect(hotel.requestedRoom).to.eql([]);
    });

  })

  describe('Hotel Methods', () => {
    it('should have a method that finds all available rooms for a given date', () => {
      const availableRooms = hotel.findAvailableRooms("2020/04/22");
      expect(availableRooms).to.eql([['2020/04/22', room2], ['2020/04/22',room3]])
    });

    it('should have a method that filters available rooms by search', () => {
      const searchProperties = {'roomType': 'single room', 'bedsize': 'king', 'numBeds': 1}
      hotel.findAvailableRooms("2020/04/22");
      const results = hotel.filterSearchResults(searchProperties);
      expect(hotel.roomSearchResults).to.eql([[
        '2020/04/22',
        {
          number: 3,
          roomType: 'single room',
          bidet: false,
          bedSize: 'king',
          numBeds: 1,
          costPerNight: 491.14
        }
      ]]);
    });

  })



})
