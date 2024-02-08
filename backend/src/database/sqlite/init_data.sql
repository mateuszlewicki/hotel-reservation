-- initial room types 
INSERT INTO room_types(type) VALUES ('Queen'); -- 1
INSERT INTO room_types(type) VALUES ('Twin'); -- 2
INSERT INTO room_types(type) VALUES ('Family'); -- 3
INSERT INTO room_types(type) VALUES ('King'); -- 4
INSERT INTO room_types(type) VALUES ('Executive'); -- 5
INSERT INTO room_types(type) VALUES ('Presidential'); -- 6
-- initial user (admin - 1, chatbot - 2 ) 
INSERT INTO users (username, password, fname, lname, email)
VALUES 
    ('admin','21232f297a57a5a743894a0e4a801fc3','Super','User','lordvader@localhost');
    ('chatbot','00f2b1ead3a0990b818517356cb40280','Chat','Bot','terminator@localhost');
-- initial roles
INSERT INTO roles (role_hash, role_name) 
VALUES
    ('SUP', 'Super Admin'), -- 1
    ('GVI', 'Global View'), -- 2
    ('GAD', 'Glboal Add'), -- 3
    ('GUP', 'Global Update'), -- 4
    ('GDE', 'Global Delete'), -- 5
    ('BVI', 'Booking View'), -- 6
    ('BAD', 'Booking Add'), -- 7
    ('BUP', 'Booking Update'), -- 8
    ('BDE', 'Booking Delete'), -- 9

-- initial role binding
INSERT INTO user_roles (user_id,role_id)
VALUES
    (1,1),
    (2,2),
    (2,6),
    (2,7),
    (2,8),
    (2,9);