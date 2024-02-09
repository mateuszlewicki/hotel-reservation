# HOTEL-RESERVATION TODOS


IMPORTANT

Think if Bot is working E2E or give basket

# Remarks

room amenites != extras

room amenites - things present in room

extras - additional paid services avalible for customers 
## Database
- [x] SQLITE Database objects
    - [x] room_types
    - [x] rooms
    - [x] extras_types
    - [x] extras
    - [x] users
    - [x] roles
    - [x] user_roles
    - [x] bookings
    - [x] basket

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
    - GET: public 
        - /bookings - get all bookings
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
        - /extras - get all extras
        - /extras/{id} - get by id 
        - /extras? - filter params 
    - POST: auth
        - /extras - add new extras {json}
    - PUT: auth
        - /extras/{id} - update specific extras {json}
    - DELETE: auth
        - /extras/{id} - delete specific extras 
    - JSON Response struct
- [ ] routes for basket (CRUD)(Condition current user == requested_user)
    - GET: auth
        - /basket?user_id={id} - get by user_id 
    - POST: auth
        - /basket - add new basket {json}
    - PUT: auth
        - /basket?user_id={id} - update specific extras {json}
    - DELETE - CRON
    - JSON Response struct

## Frontend
- [ ] CSS - proper usage of bootstrap
- add basket view
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
    - [ ] roles
    - [ ] user_roles
    - [ ] bookings
    - [ ] basket
- [ ] Split backend and data into separate folders
- [ ] Cron python script for removing baskets