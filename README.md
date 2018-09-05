# SeatFreak

SeatFreak is a single page events ticketing web app, inspired by SeatGeek. The app was built using Rails with React and Redux.

Explore at [Live](http://seatfreak.herokuapp.com/#/)

## Frameworks, Libraries etc.
SeatFreak uses:
- Ruby on Rails
- PostgreSQL
- [jQuery](https://github.com/jquery/jquery)
- [React.js](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [BCrypt](https://github.com/codahale/bcrypt-ruby) for authorization
- [PG Search](https://github.com/Casecommons/pg_search) for populating search results
- [React Debounced Input](https://github.com/nkbt/react-debounce-input) for optimal search performance


## Screnshots/Features
#### Home Page
![alt text](https://i.imgur.com/eCHKQHm.png)


#### Event Tickets
![alt text](https://i.imgur.com/NtzgGH7.jpg)


#### Ticket Checkout
![alt text](https://i.imgur.com/t7Ysqab.png)


#### User Tickets
![alt text](https://i.imgur.com/VDi1Lmm.png)


#### Sell Tickets/Update Ticket Prices
SeatFreak allows the user to sell tickets or update prices of their tickets currently on sale with ease. The Sell/Update buttons simply open up a modal, allowing the user to set/update the price of the ticket.

![alt text](https://i.imgur.com/JtOvUF3.png)


#### Search for Events, Performers, and Venues From Anywhere
SeatFreak uses PGSearch multisearch on the back-end to populate the search results. The Ruby gem allows to efficiently populate results from multiple tables using the provided search query.

On the front-end, SeatFreak uses a debounced input to optimize search performance. The input waits for a minimum of 3 characters to send a request to populate results. It also waits for 0.5s between keypresses, minimizing the number of database queries.

![alt text](https://i.imgur.com/K1tr7Iv.png)

![alt text](https://i.imgur.com/ldm1lab.png)


#### Tracker
SeatFreak uses Rails Polymorphic associations for tracking. It gives users the ability to track events, performers (artists and teams), and venues in a single table, resulting in DRYer code and less database tables.

![alt text](https://i.imgur.com/w8RlFPp.png)

## Future Plans:
* Notifications
* JWT Authentication
* Venue Seat Maps
