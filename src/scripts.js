// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import './css/_desktop.scss'
// import './css/_mobile.scss'
// import './css/_normalize.scss'
// import './css/_tablet.scss'

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
let bookingData, roomData, customerData, customer, hotel;
let todaysDate ='2020/06/19';
let populatedCards;

// let today = new Date().toISOString().split('T')[0];
// document.getElementsByName("bookdate")[0].setAttribute('min', today);

// Event Listeners
window.onload = loadPage();
searchButton.addEventListener('click', () => searchRooms())
// populatedCards.addEventListener('click', (e) => selectRoom(e))
availableRoomsBackground.addEventListener('click', (e) => selectRoom(e, hotel, todaysDate))
bookButton.addEventListener('click', () => bookRoom(bookingData, roomData, requestedRoom, customer));
// loginButton.addEventListener('click', () => logIn(hotel))


function loadPage(bookingData, roomData, customer) {
   apiCalls.retrieveData()
    .then((promise) => {
      // console.log('promise from scripts:', promise)
      customerData = promise[0];
      //console.log(customerData[0])
      roomData = promise[1];
      //console.log(roomData)
      bookingData = promise[2];
      // console.log(bookingData)
      hotel = new Hotel(roomData, bookingData, customerData)
      // console.log(hotel)
      customer = new Customer(customerData.customers[0])
      retrieveDate();
      retrieveCustomerData(bookingData, roomData, customer);
      domUpdates.displayHeaderInfo(customer, todaysDate)
      domUpdates.displayCustomerInfo(customer.roomHistory);
      domUpdates.displayAvailableRooms(hotel, todaysDate)
      // let populatedCards = document.getElementById('card');
    })
    // console.log('customer:', customer)

}

function retrieveCustomerData(bookingData, roomData, customer) {
  // console.log('customer:', customer)
  // console.log('booking data retrieveCustomerData', bookingData)

  customer.findBookingHistory(bookingData);
  customer.findRoomHistoryWithDate(bookingData, roomData)
  customer.findExpenseTotal(bookingData, roomData);

}

function retrieveDate() {
  bookDate.min = todaysDate;
  bookDate.value = todaysDate.split('/').join('-');
}

function searchRooms() {
  console.log("bookdate", bookDate.value)
  let searchData = {
    'date': bookDate.value,
    'roomType': bookRoomType.value
  }
  domUpdates.displaySearchResults(hotel, searchData);
}

function selectRoom(event, hotel, todaysDate) {
  const integerId = parseInt(event.target.closest('article').id)
  // console.log(integerId)
  // console.log(hotel)
  hotel.requestRoom(integerId)
}

function bookRoom(bookingData, roomData, requestedRoom, customer) {
  console.log('le customer?', customer)
  customer.reserveRoom(hotel.requestedRoom, bookingData, roomData)
  // apiCalls.addNewBooking(bookingData, roomData, hotel.requestedRoom)
}

function logIn(hotel) {
  event.preventDefault();
  // console.log('usernames', username.value)
  const userID = parseInt(username.value.split('r').pop());
  // console.log('userID', userID)
  // console.log('hotel', hotel.customers)
  const foundCustomer = hotel.customers.customers.find(currentCustomer => {
    // console.log('currentCustomer:', currentCustomer.id)
    return currentCustomer.id === userID
  });
  console.log('passwordValue:', password.value)
  // console.log('foundCustomer:', foundCustomer)
  if (foundCustomer && password.value === 'overlook2021') {
    //unhide all elements that are hidden (domUpdates function)
    console.log('we did it!')
    domUpdates.displayLogInSuccess()
  } else {
    //unhide the display-error p tag
    console.log('did we fail?')
    domUpdates.displayLogInError()
  }


}
