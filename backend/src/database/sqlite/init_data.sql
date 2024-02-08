-- initial room types 
INSERT INTO room_types(type) VALUES ('Queen'); -- 1
INSERT INTO room_types(type) VALUES ('Twin'); -- 2
INSERT INTO room_types(type) VALUES ('Family'); -- 3
INSERT INTO room_types(type) VALUES ('King'); -- 4
INSERT INTO room_types(type) VALUES ('Executive'); -- 5
INSERT INTO room_types(type) VALUES ('Presidential'); -- 6
-- initial user (admin - 1, chatbot - 2, dummyclient - 3 ) 
-- ONLY USED IN DEV 
-- TODO: CHANGE LATER
INSERT INTO users (username, password, fname, lname, email)
VALUES 
    ('admin','21232f297a57a5a743894a0e4a801fc3','Super','User','lordvader@localhost');
    ('chatbot','00f2b1ead3a0990b818517356cb40280','Chat','Bot','terminator@localhost');
    ('dummyclient','49a5fa65367aeb1100747a42fbc96109','Dummy','Client','dummyclient@localhost');
-- initial roles
INSERT INTO roles (role_hash, role_name) 
VALUES
    ('CLI', 'Client') -- 1
    ('SUP', 'Super Admin'), -- 2
    ('GVI', 'Global View'), -- 3
    ('GAD', 'Glboal Add'), -- 4
    ('GUP', 'Global Update'), -- 5
    ('GDE', 'Global Delete'), -- 6
    ('BVI', 'Booking View'), -- 7
    ('BAD', 'Booking Add'), -- 8
    ('BUP', 'Booking Update'), -- 9
    ('BDE', 'Booking Delete'), -- 10

-- initial role binding
INSERT INTO user_roles (user_id,role_id)
VALUES
    (1,2),
    (2,3),
    (2,7),
    (2,8),
    (2,9),
    (2,10),
    (3,1);