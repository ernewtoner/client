DROP TABLE IF EXISTS user_acct;
DROP TABLE IF EXISTS chat;
DROP TABLE IF EXISTS message;

CREATE TABLE user_acct (
    id serial PRIMARY KEY,
    email varchar (50) NOT NULL,
    password varchar (25) NOT NULL,
    display_name varchar (15) NOT NULL,
    first_name varchar (20),
    last_name varchar (20)
);

CREATE TABLE chat (
    id serial PRIMARY KEY,
    name varchar (25)
);

CREATE TABLE message (
    id serial PRIMARY KEY,
    text varchar (30000) NOT NULL,
    date_posted date NOT NULL,
    time_posted time NOT NULL
    -- Alternative: time_posted timestamp with time zone NOT NULL
);
