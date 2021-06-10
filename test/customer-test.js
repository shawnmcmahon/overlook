import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/hotel'
import Customer from '../src/customer'
import sampleCustomerData from './sampleCustomerData'
import sampleRoomData from './sampleHotelData'
import sampleBookingData from './sampleHotelData'

describe('Customer Class', () => {
  //Declare variable names here
  let customer1, customer2, customer3, hotelCustomers;
  let room1, room2, room3, hotelRooms;
  let booking1, booking2, booking3, hotelBookings;
  let hotel;
  beforeEach(() => {
      customer1 = new Customer(sampleCustomerData.customers[0]);
      customer2 = new Customer(sampleCustomerData.customers[1]);
      customer3 = new Customer(sampleCustomerData.customers[2]);
      hotelCustomers = sampleCustomerData;
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

      // May be going 1 step too deep in this sample object data set
      // May effect data once connected to api
      // May need to figure out how to remove redundant property below
      room1 = sampleRoomData.sampleRoomData.rooms[0];
      room2 = sampleRoomData.sampleRoomData.rooms[1];
      room3 = sampleRoomData.sampleRoomData.rooms[2];
      hotelRooms = sampleRoomData;

      booking1 = sampleBookingData.sampleBookingData.bookings[0];
      booking2 = sampleBookingData.sampleBookingData.bookings[1];
      booking3 = sampleBookingData.sampleBookingData.bookings[2];
      hotelBookings = sampleBookingData;

      hotel = new Hotel(hotelRooms, hotelBookings, sampleCustomerData);
  })


  describe('Customer Properties', () => {
    it('should be a function', function() {
      expect(Customer).to.be.a('function');
    });

    it('should be an instance of customer', () => {
      expect(customer1).to.be.an.instanceof(Customer);
      expect(customer2).to.be.an.instanceof(Customer);
      expect(customer3).to.be.an.instanceof(Customer);
    });

    it('should have an ID property', () => {
      expect(customer1.id).to.eql(1);
      expect(customer2.id).to.eql(2);
      expect(customer3.id).to.eql(3);
    });

  })

  describe('Customer Methods', () => {


  })



})
