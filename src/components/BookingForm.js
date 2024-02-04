import React from "react";
import { useState } from "react";

export default function BookingForm(props) {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
    console.log("Form submitted");
  };

  const handleChange = (e) => {
    setDate(e.target.value);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={handleChange}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time:</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                type="number"
                placeholder="1"
                id="book-guests"
                value={guests}
                min="1"
                max="15"
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Family Gathering</option>
              </select>
            </div>
            <div>
              {/* <input aria-label="onClick" type="submit" value={"Submit"} /> */}
              <button
                className="btnReceive"
                aria-label="onClick"
                type="submit"
                value={"Submit"}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}
