-- Flush database
PRAGMA foreign_keys = OFF

DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS extras_types;
DROP TABLE IF EXISTS extras;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS room_types;
DROP TABLE IF EXISTS rooms;

PRAGMA foreign_keys = ON

-- Create tables

-- roles for RBAC

CREATE TABLE roles {
    role_id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT UNIQUE NOT NULL
};

-- app users
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    fname TEXT,
    lname TEXT,
    email TEXT
);
-- roles binding


CREATE TABLE user_roles{
    user_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) 
        REFERENCES users (user_id)
    FOREIGN KEY 
        REFERENCES roles (role_id)
    PRIMARY KEY (user_id,role_id)
};

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
    client_id INTEGER NOT NULL,
    date_from INTEGER NOT NULL,
    date_to INTEGER NOT NULL,
    days INTEGER GENERATED ALWAYS 
        AS (unixepoch(date_to)-unixepoch(date_from)) VIRTUAL,
    price REAL NOT NULL,
    comment TEXT,
    FOREIGN KEY (client_id)
       REFERENCES clients (client_id),
);

CREATE TABLE room_types (
    room_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT UNIQUE NOT NULL,
);

CREATE TABLE rooms (
    room_id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_type_id INTEGER NOT NULL,
    price REAL NOT NULL,
    amenites BLOB
);