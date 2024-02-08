-- initial room types 
INSERT INTO room_types(type) VALUES ('Queen'); -- 1
INSERT INTO room_types(type) VALUES ('Twin'); -- 2
INSERT INTO room_types(type) VALUES ('Family'); -- 3
INSERT INTO room_types(type) VALUES ('King'); -- 4
INSERT INTO room_types(type) VALUES ('Executive'); -- 5
INSERT INTO room_types(type) VALUES ('Presidential'); -- 6
-- initial user
INSERT INTO users (username, password, fname, lname, email)
VALUES ('admin','')
