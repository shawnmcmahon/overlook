// import './css/base.scss'
import './css/_normalize.scss'
import './css/_variables.scss'
import './css/_desktop.scss'
import './css/_tablet.scss'
import './css/_mobile.scss'

import Customer from './customer';
import Hotel from './hotel';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';

// import Images here


//Page Selectors
let availableRoomsBackground = document.getElementById('availableRoomsBackground');
let reservationHistoryBackground = document.getElementById('reservationHistoryBackground');
//Nav Selectors
let welcome = document.getElementById('welcome');
let expenseHistory = document.getElementById('expenseHistory');
let date = document.getElementById('date');
//Form selectors
let bookDate = document.getElementById('bookDate')
let bookRoomType = document.getElementById('bookRoomType');
let bookNumBeds = document.getElementById('bookNumBeds');
let bookYesBidet = document.getElementById('bookYesBidet');
let noBidet = document.getElementById('bookNoBidet');
let doesntMatterBidet = document.getElementById('bookNPBidet');
let searchButton = document.getElementById('searchRooms');
let bookButton = document.getElementById('bookRoom');
let noAvailableRoomError = document.getElementById('noAvailableRoomError')
//Card selectors
let roomNumber = document.getElementById('roomNumber');
let roomReservationDate = document.getElementById('roomReservationDate');
let roomCost = document.getElementById('roomCost');
let roomType = document.getElementById('roomType');
let roomNumberOfBeds = document.getElementById('roomNumberOfBeds');
let roomBidet = document.getElementById('roomBidet');
let card = document.getElementById('card');

//Login selectors
let loginForm = document.getElementById('loginForm');
let loginButton = document.getElementById('loginButton');
let username = document.getElementById('username')
let password = document.getElementById('password')

// Variables
let bookingData, roomData, customerData, customer, hotel, userID;
let todaysDate ='2020/06/19';
let populatedCards;
let customerID;


// Event Listeners
// window.onload = loadPage();
window.onload = loadLoginPage();
searchButton.addEventListener('click', () => searchRooms())
// populatedCards.addEventListener('click', (e) => selectRoom(e))
availableRoomsBackground.addEventListener('click', (e) => selectRoom(e, hotel, todaysDate))
bookButton.addEventListener('click', () => bookRoom(customer, hotel));
loginButton.addEventListener('click', () => logIn(hotel))




function loadLoginPage() {
   apiCalls.retrieveData()
    .then((promise) => {
      customerData = promise[0];
      roomData = promise[1];
      bookingData = promise[2];
      hotel = new Hotel(roomData, bookingData, customerData)

      // console.log('userID', userID)
    })


}

function loadPage(bookingData, roomData, userID) {
   apiCalls.retrieveData()
    .then((promise) => {
      console.log("userID in promise", customerID)
      customerData = promise[0];
      roomData = promise[1];
      bookingData = promise[2];
      hotel = new Hotel(roomData, bookingData, customerData)
      customer = new Customer(customerData.customers[customerID - 1])
      console.log('customer right after is is made:', customer)
      // formatDate(todaysDate);
      retrieveCustomerData(bookingData, roomData, customer);
      domUpdates.displayHeaderInfo(customer, todaysDate)
      domUpdates.displayCustomerInfo(customer.roomHistory);
      domUpdates.displayAvailableRooms(hotel, todaysDate)
      // console.log('userID', userID)
    })


}

function retrieveCustomerData(bookingData, roomData, customer) {
  console.log('current customer:', customer)
  customer.findBookingHistory(bookingData);
  customer.findRoomHistoryWithDate(bookingData, roomData)
  customer.findExpenseTotal(bookingData, roomData);
}

// function formatDate(date) {
//   bookDate.min = date;
//   bookDate.value = date.split('/').join('-');
// }

function searchRooms() {
  let searchData = {
    'date': bookDate.value.split('-').join('/'),
    'roomType': bookRoomType.value
  }
  console.log('seachData:', searchData);
  domUpdates.displaySearchResults(hotel, searchData);
}

function selectRoom(event, hotel, todaysDate) {
  const integerId = parseInt(event.target.closest('article').id);
  hotel.requestRoom(integerId);
}

const bookRoom = (customer, hotel) => {
  let date = bookDate.value.split("-").join('/');
  let roomNumber = hotel.requestedRoom[1].number;
  console.log('room number wanted:', roomNumber);
  let customerID = customer.id;

  apiCalls.addNewBooking(customerID, date, roomNumber);
  hotel.bookings.bookings.push({
    userID: customerID,
    date: date,
    roomNumber: roomNumber
  });
  customer.bookingsHistory.push({
    userID: customerID,
    date: date,
    roomNumber: roomNumber
  });
  // apiCalls.retrieveBookings()

    // hotel.bookings = apiCalls.fetchBookingData()
    // console.log('hotels.bookings:', hotel.bookings)
    hotel.findAvailableRooms(date);
    customer.findBookingHistory(bookingData);
    customer.bookingHistory.sort().reverse();
    domUpdates.displayAvailableRooms(hotel, date);
    domUpdates.displayCustomerInfo(customer.roomHistory);

}

function logIn(hotel) {
  event.preventDefault();
  const userID = parseInt(username.value.split('r').pop());
  const foundCustomer = hotel.customers.customers.find(currentCustomer => {
    return currentCustomer.id === userID
  });
  if (foundCustomer && password.value === 'overlook2021') {
    loadPage()
    domUpdates.displayLogInSuccess()
  } else {
    domUpdates.displayLogInError()
  }
  console.log('userID in logIN function', userID)
  customerID = userID;
  console.log('customerID in logIN function', customerID)



}
