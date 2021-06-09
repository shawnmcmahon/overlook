import chai from 'chai';
const expect = chai.expect;
import Hotel from '../src/hotel'
import Customer from '../src/customer'
import sampleCustomerData from './sampleCustomerData'
import sampleRoomData from './sampleHotelData'
import sampleBookingData from './sampleHotelData'

describe('Hotel Class', () => {
  //Declare variable names here
  let customer1, customer2, customer3;
  let room1, room2, room3, hotelRooms;
  let booking1, booking2, booking3, hotelBookings;
  let hotel;
  beforeEach(() => {
    hotelCustomers = {'customers': [
      {
        customer1 = new Customer(sampleCustomerData[0]);
      },
      {
        customer2 = new Customer(sampleCustomerData[1])
      },
      {
        customer3 = new Customer(sampleCustomerData[2]);
      }
    ]};
    hotelRooms = {'rooms': [
      {
        room1 = sampleRoomData[0]
      },
      {
        room2 = sampleRoomData[1],
      }
      {
        room3 = sampleRoomData[2],
      }
    ]};
    hotelBookings = {'bookings': [
      {
        booking1 = sampleBookingData[0];

      },
      {
        booking2 = sampleBookingData[1];
      },
      {
        booking3 = sampleBookingData[2];
      }
    ]};
    hotel = new Hotel(hotelRooms, hotelBookins, hotelCustomers);
  })


  describe('Hotel Properties', () => {


  })

  describe('Hotel Methods', () => {


  })



})
