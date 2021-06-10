import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/hotel'
import Customer from '../src/customer'
import sampleCustomerData from './sampleCustomerData'
import sampleRoomData from './sampleHotelData'
import sampleBookingData from './sampleHotelData'

describe('Customer Class', () => {
  //Declare variable names here
  let customer1, customer2, customer3;
  let hotelCustomers;
  let room1, room2, room3, hotelRooms;
  let booking1, booking2, booking3, hotelBookings;
  let hotel;
  beforeEach(() => {

        customer1 = new Customer(sampleCustomerData[0]);
        customer2 = new Customer(sampleCustomerData[1]);
        customer3 = new Customer(sampleCustomerData[2]);
        hotelcustomers = sampleCustomerData;
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

        room1 = sampleRoomData[0];
        room2 = sampleRoomData[1];
        room3 = sampleRoomData[2];
        hotelRooms = sampleRoomData;

        booking1 = sampleBookingData[0];
        booking2 = sampleBookingData[1];
        booking3 = sampleBookingData[2];
        hotelBookings = sampleBookingData;

    hotel = new Hotel(hotelRooms, hotelBookings, sampleCustomerData);
  })


  describe('Customer Properties', () => {
    it.only('should be a function', function() {
      expect(Customer).to.be.a('function');
    });

  })

  describe('Customer Methods', () => {


  })



})
