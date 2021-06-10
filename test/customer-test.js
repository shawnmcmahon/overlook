import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/hotel'
import Customer from '../src/customer'
import sampleCustomerData from './sampleCustomerData'
import sampleRoomData from './sampleRoomData'
import sampleBookingData from './sampleBookingData'

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
      room1 = sampleRoomData.rooms[0];
      room2 = sampleRoomData.rooms[1];
      room3 = sampleRoomData.rooms[2];
      hotelRooms = sampleRoomData;

      booking1 = sampleBookingData.bookings[0];
      booking2 = sampleBookingData.bookings[1];
      booking3 = sampleBookingData.bookings[2];
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

    it('should have a name property', () => {
      expect(customer1.name).to.eql("Leatha Ullrich");
      expect(customer2.name).to.eql("Rocio Schuster");
      expect(customer3.name).to.eql("Kelvin Schiller");
    });

    it('should have a booking history property that is an empty array by default', () => {
      expect(customer1.bookingHistory).to.eql([]);
      expect(customer2.bookingHistory).to.eql([]);
      expect(customer3.bookingHistory).to.eql([]);
    });

    it('should have a room history property that is an empty array by default', () => {
      expect(customer1.roomHistory).to.eql([]);
      expect(customer2.roomHistory).to.eql([]);
      expect(customer3.roomHistory).to.eql([]);
    });

    it('should have an expense history property that is 0 by default', () => {
      expect(customer1.expenseHistory).to.eql(0);
      expect(customer2.expenseHistory).to.eql(0);
      expect(customer3.expenseHistory).to.eql(0);
    });

  })

  describe('Customer Methods', () => {
    it.only('should have a method updates the bookingHistory property with the user\'s booking history', () => {
      const customer1BookingHistory = customer1.findBookingHistory(sampleBookingData);
      const customer2BookingHistory = customer2.findBookingHistory(sampleBookingData);
      const customer3BookingHistory = customer3.findBookingHistory(sampleBookingData);
      expect(customer1.bookingHistory).to.eql([booking1])
      expect(customer2.bookingHistory).to.eql([booking2])
      expect(customer3.bookingHistory).to.eql([booking3])
    });

  })



})
