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
// import domUpdates from './domUpdates';

// import Images here


//Page Selectors
let availableRoomsBackground = document.getElementById('availableRoomsBackground');
let reservationHistoryBackground = document.getElementById('reservationHistoryBackground');

//Form selectors
let bookDate = document.getElementById('bookDate');
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

// Variables
let bookingData, roomData, customerData, customer, hotel;
// Event Listeners
window.onload = loadPage();


function loadPage() {
   apiCalls.retrieveData()
    .then((promise) => {
      console.log('promise from scripts:', promise)
      customerData = promise[0].customers;
      //console.log(customerData[0])
      roomData = promise[1].rooms;
      //console.log(roomData)
      bookingData = promise[2].bookings
      // console.log(bookingData)
      hotel = new Hotel(roomData, bookingData, customerData)
      // console.log(hotel)
      customer = new Customer(customerData[0])
      console.log(customer)
    })
    //Scripts function that will run customer methods to find findBookingHistory
    //and expense history

    //DOM Updates function that updates the user's info to the DOM
}

function retrieveCustomerData(customerData, bookingData, roomData) {
  customer.findBookingHistory(bookingData)
  customer.findExpenseTotal(bookingData, roomData)
  //DOM Updates function that updates the user's info to the DOM


}
