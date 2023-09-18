const { Appointment } = require('../models');
const appointmentdata = [
  {
    name: 'Gabriel Regus',
    // starting_date: 'April 20, 2023 07:00:00',
    // // ending_date: 'June 21, 2023 17:00:00',
  },
  {
    name: 'Cynthia Pian',
    starting_date: 'June 22, 2023 09:00:00',
    ending_date: 'September 22, 2023 22:00:00',
  },
  {
    name: 'Dayes Camara',
    starting_date: 'September 23, 2023 08:30:00',
    ending_date: 'December 21, 2023 20:30:00',
  },
  {
    name: 'William Gates',
    starting_date: 'December 22, 2023 11:00:00',
    ending_date: 'March 19, 2023 19:00:00',
  },
];
const seedAppointment = () => Appointment.bulkCreate(appointmentdata);
module.exports = seedAppointment;












