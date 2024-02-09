# HOTEL-RESERVATION TODOS


IMPORTANT

Think if Bot is working E2E or give basket

# Remarks

room amenites != extras

room amenites - things present in room

extras - additional paid services avalible for customers 
## Database
- [ ] SQLITE Database objects
    - [ ] room_types
    - [ ] rooms
    - [ ] extras_types
    - [ ] extras
    - [ ] users
    - [ ] bookings

### Tables

[SCHEMA](./SCHEMA.MD)

## Backend
// GET would retrieve data,

// POST will create data, 

// PUT will update data, 

// DELETE will get rid of the data.
- [ ] routes for rooms CRUD (CeateReadUpdateDelete)
    - GET: public
        - /rooms - get all rooms
        - /rooom/{id} - get by id 
        - /rooms? - filter params 
    - POST: auth
        - /rooms - add new room {json}
    - PUT: auth
        - /rooms/{id} - update room {json}
    - DELETE: auth
        - /rooms/{id} - delete room 
    - JSON Response struct
- [ ] routes for bookings (CRUD)
    - GET 
        - /bookings - get all rooms
        - /bookings/{id} - get by id 
        - /bookings? - filter params 
    - POST: auth
        - /bookings - add new booking {json}
    - PUT: auth
        - /bookings/{id} - update booking {json}
    - DELETE: auth
        - /bookings/{id} - delete booking 
    - JSON Response struct
- [ ] routes for extras (CRUD)
    - GET 
        - /extras - get all rooms
        - /extras/{id} - get by id 
        - /extras? - filter params 
    - POST: auth
        - /extras - add new extras {json}
    - PUT: auth
        - /extras/{id} - update specific extras {json}
    - DELETE: auth
        - /extras/{id} - delete specific extras 
    - JSON Response struct
- basket

## Frontend
- [ ] CSS - proper usage of bootstrap
- add basket
## AI

## Authentication API
- [ ] Token based - JWT 

## Authentication - app 
- [ ] registration
- [ ] login

## FUTURE
- [ ] POSTGRESQL Database objects (FUTURE)
    - [ ] room_types
    - [ ] rooms
    - [ ] extras_types
    - [ ] extras
    - [ ] users
    - [ ] bookings
- [ ] Split backend and data into separate folders
- [ ] Cron python script for removing baskets