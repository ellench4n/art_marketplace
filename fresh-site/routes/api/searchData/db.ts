import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";

const db = new DB("./routes/api/searchData/data.db");

db.query(`
    CREATE TABLE IF NOT EXISTS ARTIST (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        UNIQUE (name)
    );
    
    CREATE TABLE IF NOT EXISTS CUSTOMER (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT,
        shipping_address TEXT,
        UNIQUE (username)
    );
    
    CREATE TABLE IF NOT EXISTS ARTWORK (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        image TEXT,
        medium TEXT,
        stock INTEGER,
        price FLOAT,
        artist_id INTEGER,
        FOREIGN KEY (artist_id) REFERENCES ARTIST(id)
    );
    
    CREATE TABLE IF NOT EXISTS PURCHASES (
        artwork_id INTEGER,
        customer_id INTEGER,
        quantity INTEGER,
        FOREIGN KEY (artwork_id) REFERENCES ARTWORK(id),
        FOREIGN KEY (customer_id) REFERENCES CUSTOMER(id),
        PRIMARY KEY (artwork_id, customer_id)
    );
    
    CREATE TABLE IF NOT EXISTS CART_ITEM (
        artwork_id INTEGER,
        customer_id INTEGER,
        quantity INTEGER,
        FOREIGN KEY (artwork_id) REFERENCES ARTWORK(id),
        FOREIGN KEY (customer_id) REFERENCES CUSTOMER(id),
        PRIMARY KEY (artwork_id, customer_id)
    );    
`);

export function getArtistByName(input: string) {
    const result = db.query("SELECT * FROM ARTIST WHERE name LIKE ? COLLATE NOCASE",  [`%${input}%`]);
    return result;
}

export function getArtworksByTitle(input: string){
    const result = db.query(
      `SELECT artwork.id, artwork.title, artist.name AS artist_name 
       FROM artwork 
       JOIN artist ON artwork.artist_id = artist.id 
       WHERE artwork.title LIKE ? COLLATE NOCASE`,
      [`%${input}%`]
    )
    return result;
}

export function getArtworksByMedium(input: string){
    const result = db.query(
      `SELECT artwork.id, artwork.title, artwork.medium, artist.name AS artist_name 
       FROM artwork 
       JOIN artist ON artwork.artist_id = artist.id 
       WHERE artwork.medium LIKE ? COLLATE NOCASE`,
      [`%${input}%`]
    )
    return result;
}
