# HOTEL-RESERVATION TODOS

room amenites != extras

room amenites - things present in room

extras - additional paid services avalible for customers 
## Database
- [ ] Database tables (postgress JSONB document)
    - rooms 
        - id
        - type (ENUM) // (based on hilton warsaw two hotels)
            - Queen, 
            - Twin, 
            - Family, 
            - King, 
            - Executive, 
            - Presidential  
        - amenites
    - clients
        - id
        - fname
        - lname
        - mail
    - extras
        - id
        - name
        - price
        - type
    - bookings
        - id
        - client_data
        - date_from
        - date_to
        - days
        - price
        - booked_by
    - users
        - login
        - password
        - email
        - token // maybe not directly 
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
Token based - hashed login:password (MD5)