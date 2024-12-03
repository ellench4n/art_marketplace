import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("data.db");

db.execute(`
CREATE TABLE IF NOT EXISTS ARTIST (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
);

CREATE TABLE IF NOT EXISTS CUSTOMER (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT,
    shipping_address TEXT,
);

CREATE TABLE IF NOT EXISTS ARTWORK (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    image TEXT,
    medium TEXT,
    stock INTEGER,
    price INTEGER,
    artist_id INTEGER,
    FOREIGN KEY (artist_id) REFERENCES ARTIST(id)
);

CREATE TABLE IF NOT EXISTS CART (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    purchased TEXT,
    customer_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES CUSTOMER(id)
);

CREATE TABLE IF NOT EXISTS PURCHASES (
    purchased TEXT,
    artwork_id INTEGER,
    customer_id INTEGER,
    FOREIGN KEY (artwork_id) REFERENCES ARTWORK(id),
    FOREIGN KEY (customer_id) REFERENCES CUSTOMER(id),
    PRIMARY KEY (artwork_id, customer_id)
);

CREATE TABLE IF NOT EXISTS CART_ITEM (
    quantity INTEGER,
    artwork_id INTEGER,
    cart_id INTEGER,
    FOREIGN KEY (artwork_id) REFERENCES ARTWORK(id),
    FOREIGN KEY (cart_id) REFERENCES CART(id),
    PRIMARY KEY (artwork_id, cart_id)
);
    `);

