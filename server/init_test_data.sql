INSERT INTO users (email, password, display_name, first_name, last_name)
VALUES ('jane@example.com', 'hello123', 'jane', 'Jane', 'Johnson'), ('george@example.com', 'hello456', 'george', 'George', 'Smith'), ('jenny@example.com', 'hello789', 'jenny', 'Jenny', 'Miller');

INSERT INTO chats (name)
VALUES ('Chat1'), ('Chat2');

INSERT INTO messages (chats_id, users_id, text)
VALUES (1, 1, 'Test message, chat 1, user 1'), (1, 2, 'Test message, chat 1, user 2'), (2, 3, 'Test message, chat 2, user 3');

INSERT INTO users_chats (users_id, chats_id)
VALUES (1, 1), (2, 1), (1, 2), (2, 2), (3, 2);

INSERT INTO users_messages_emojis (users_id, messages_id, emoji)
VALUES (1, 1, 'User 1 Emoji'), (2, 2, 'User 2 Emoji'), (3, 3, 'User 3 Emoji');
