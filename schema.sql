-- db/schema.sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255),
  content TEXT
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id),
  user_id INTEGER REFERENCES users(id),
  comment TEXT
);


-- Retrieve posts by a specific user
SELECT * FROM posts WHERE user_id = $1;

-- Count comments on a post
SELECT COUNT(*) FROM comments WHERE post_id = $1;
