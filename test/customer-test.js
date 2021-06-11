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
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer1).to.be.an.instanceof(Customer);
    expect(customer2).to.be.an.instanceof(Customer);
    expect(customer3).to.be.an.instanceof(Customer);
  });

  describe('Customer Properties', () => {
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
      expect(customer1.expenseTotal).to.eql(0);
      expect(customer2.expenseTotal).to.eql(0);
      expect(customer3.expenseTotal).to.eql(0);
    });

  })


  describe('Customer Methods', () => {
    it('should have a method that updates the bookingHistory property with the customer\'s booking history', () => {
      const customer1BookingHistory = customer1.findBookingHistory(sampleBookingData);
      const customer2BookingHistory = customer2.findBookingHistory(sampleBookingData);
      const customer3BookingHistory = customer3.findBookingHistory(sampleBookingData);
      expect(customer1.bookingHistory).to.eql([booking1])
      expect(customer2.bookingHistory).to.eql([booking2])
      expect(customer3.bookingHistory).to.eql([booking3])
    });

    it('should have a method that updates the roomHistory property with the customer\'s room history with the date attached', () =>  {
      const customer1RoomHistory = customer1.findRoomHistoryWithDate(sampleBookingData, sampleRoomData);
      const customer2RoomHistory = customer2.findRoomHistoryWithDate(sampleBookingData, sampleRoomData);
      const customer3RoomHistory = customer3.findRoomHistoryWithDate(sampleBookingData, sampleRoomData);
      expect(customer1.roomHistory).to.eql([[
        '2020/04/22',
        {
          number: 1,
          roomType: 'residential suite',
          bidet: true,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 358.4
        }
      ]])
      expect(customer2.roomHistory).to.eql([[
        '2020/01/24',
        {
          number: 2,
          roomType: 'suite',
          bidet: false,
          bedSize: 'full',
          numBeds: 2,
          costPerNight: 477.38
        }
      ]])
      expect(customer3.roomHistory).to.eql([[
        '2020/01/10',
        {
          number: 3,
          roomType: 'single room',
          bidet: false,
          bedSize: 'king',
          numBeds: 1,
          costPerNight: 491.14
        }
      ]])
    });

    it('should have a method that updates the expenseTotal property with the customer\'s', () => {
      const customer1ExpenseTotal = customer1.findExpenseTotal(sampleBookingData, sampleRoomData);
      const customer2ExpenseTotal = customer2.findExpenseTotal(sampleBookingData, sampleRoomData);
      const customer3ExpenseTotal = customer3.findExpenseTotal(sampleBookingData, sampleRoomData);
      expect(customer1.expenseTotal).to.equal(716.80);
      expect(customer2.expenseTotal).to.equal(954.76);
      expect(customer3.expenseTotal).to.equal(491.14);
    });

  })



})
