import React, { useState } from 'react';
import "react-datetime/css/react-datetime.css";
import ContactForm from '../forms/ContactForm';
import styles from './DateTimePicker.module.css';

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = async () => {
    if (selectedDate && selectedTime) {
      const completeDateTime = new Date(selectedDate);
      completeDateTime.setHours(selectedTime.hours());
      completeDateTime.setMinutes(selectedTime.minutes());

      console.log("Appointment booked for:", completeDateTime);

      setAppointmentDate(completeDateTime);

      // Additional logic to handle booking can be added here

      // Reset the form
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      alert("Please select a valid date and time for the appointment.");
    }
  };

  return (
    <div className={styles['datetime-picker-container']}>
      <div className={styles['date-picker']}>
        <Datetime
          value={selectedDate}
          onChange={handleDateChange}
          inputProps={{ placeholder: 'Select date', readOnly: true }}
          className={`${styles['appearance-none']} ${styles['shadow']} ${styles['border']} ${styles['rounded']} ${styles['text-gray-darker']}`}
        />
      </div>
      <div className={styles['time-picker']}>
        <Datetime
          value={selectedTime}
          onChange={handleTimeChange}
          inputProps={{ placeholder: 'Select time', readOnly: true }}
          dateFormat={false}
          timeFormat="HH:mm"
          className={`${styles['appearance-none']} ${styles['shadow']} ${styles['border']} ${styles['rounded']} ${styles['text-gray-darker']}`}
        />
      </div>
      <button className={styles['book-appointment-btn']} onClick={handleBookAppointment}>
        Book Appointment
      </button>
      <ContactForm appointmentDate={appointmentDate} />
    </div>
  );
};

export default DateTimePicker;
