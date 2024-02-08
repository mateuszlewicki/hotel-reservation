# HOTEL-RESERVATION TODOS

room amenites != extras

room amenites - things present in room

extras - additional paid services avalible for customers 
## Database
- [ ] POSTGRESQL Database objects (future)
    - [ ] room_types
    - [ ] rooms
    - [ ] clients
    - [ ] extras_types
    - [ ] extras
    - [ ] users
    - [ ] bookings
- [ ] SQLITE Database objects
    - [ ] room_types
    - [ ] rooms
    - [ ] clients
    - [ ] extras_types
    - [ ] extras
    - [ ] users
    - [ ] bookings

TYPES are indicted ( SQLITE | POSTGRESQL )

IMPORTANT!

Create table which you will be referrencing first!

### Tables
- room_types (table | ENUM )
    - room_type_id (INTEGER)
    - type (TEXT)
        - Queen, 
        - Twin, 
        - Family, 
        - King, 
        - Executive, 
        - Presidential 
- rooms 
    - id (INTEGER)
    - room_type (FK room_types.room_type_id)
    - amenites ( BLOB | JSONB )
    - price (REAL)
- clients
    - id (INTEGER)
    - fname (TEXT)
    - lname (TEXT)
    - email (TEXT)
- extras_types
    - extras_type_id (INTEGER)
    - type (TEXT)
- extras
    - id (INTEGER)
    - name (TEXT)
    - price (REAL)
    - type (INTEGER)
- users
    - user_id (INTEGER)
    - username (TEXT)
    - fname (TEXT)
    - lname (TEXT)
    - password (TEXT)
    - email (TEXT)
- bookings
    - id (INTEGER)
    - client_id (INTEGER)
    - date_from (INTEGER)
    - date_to (INTEGER)
    - days (INTEGER)
    - price (REAL)
    - booked_by (FK users.user_id)


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


## Frontend
- [ ] CSS - proper usage of bootstrap
## AI

## Authentication API
Token based - JWT