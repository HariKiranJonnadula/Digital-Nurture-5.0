-- Schema initialization for H2 in MySQL Mode
CREATE TABLE IF NOT EXISTS country (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
