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

-- roles for RBAC

CREATE TABLE roles (
    role_id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_name TEXT UNIQUE NOT NULL,
    role_hash TEXT UNIQUE NOT NULL
);

-- app users
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    avatar BLOB
);
-- roles binding


CREATE TABLE user_roles(
    user_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    FOREIGN KEY (user_id)REFERENCES users(user_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    PRIMARY KEY (user_id,role_id)
);

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
    user_id INTEGER NOT NULL,
    date_from INTEGER NOT NULL,
    date_to INTEGER NOT NULL,
    duration INTEGER GENERATED ALWAYS 
        AS (unixepoch(date_to)-unixepoch(date_from)) VIRTUAL,
    price REAL NOT NULL,
    comment TEXT,
    created_at INTEGER DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
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

