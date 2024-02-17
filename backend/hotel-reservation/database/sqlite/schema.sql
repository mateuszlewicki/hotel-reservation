-- Flush database
PRAGMA foreign_keys = OFF;

DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS extras_types;
DROP TABLE IF EXISTS extras;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS room_types;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS baskets;

PRAGMA foreign_keys = ON;

-- Create tables

-- MOVED TO KEYCLOACK
--roles  users  user_roles

CREATE TABLE extras_types (
    extras_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type_text TEXT UNIQUE NOT NULL
);

CREATE TABLE extras (
    extras_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type INTEGER,
    price REAL NOT NULL,
    FOREIGN KEY (type) REFERENCES extras_type(extras_type_id)
);

CREATE TABLE bookings (
    booking_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT NOT NULL,
    date_from INTEGER NOT NULL,
    date_to INTEGER NOT NULL,
    duration INTEGER GENERATED ALWAYS 
        AS (unixepoch(date_to)-unixepoch(date_from)) VIRTUAL,
    price REAL NOT NULL,
    comment TEXT,
    created_at INTEGER DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE room_types (
    room_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT UNIQUE NOT NULL
);

CREATE TABLE rooms (
    room_id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_type_id INTEGER NOT NULL,
    price REAL NOT NULL,
    amenites BLOB,
    image BLOB
);

CREATE TABLE baskets (
    basket_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content BLOB,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)

