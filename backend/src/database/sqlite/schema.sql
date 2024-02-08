-- Flush database
PRAGMA foreign_keys = OFF

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS extras;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS rooms;

PRAGMA foreign_keys = ON

-- Create tables

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    fname TEXT,
    lname TEXT,
    email TEXT
);
CREATE TABLE clients (
    client_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    email TEXT NOT NULL
);
CREATE TABLE extras_types (
    extras_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT UNIQUE NOT NULL,
);

CREATE TABLE extras (
    extras_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type INTEGER,
    price REAL NOT NULL,
    FOREIGN KEY (type)
       REFERENCES extras_type (extras_type_id)
);
CREATE TABLE bookings (
    booking_id INTEGER PRIMARY KEY AUTOINCREMENT,
    booked_by INTEGER NOT NULL,
    client_id INTEGER NOT NULL,
    date_from INTEGER NOT NULL,
    date_to INTEGER NOT NULL,
    days INTEGER GENERATED ALWAYS 
        AS (unixepoch(date_to)-unixepoch(date_from)) VIRTUAL,
    price REAL NOT NULL,
    FOREIGN KEY (client_id)
       REFERENCES clients (client_id),
    FOREIGN KEY (booked_by)
       REFERENCES users (user_id)
    
);
CREATE TABLE room_types (
    room_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT UNIQUE NOT NULL,
);

CREATE TABLE rooms (
    room_id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_type INTEGER NOT NULL,
    price REAL NOT NULL,
    amenites BLOB
);