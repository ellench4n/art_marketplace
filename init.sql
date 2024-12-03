DROP TABLE ARTIST;
DROP TABLE CUSTOMER;
DROP TABLE ARTWORK;
DROP TABLE PURCHASES;
DROP TABLE CART_ITEM;

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

INSERT INTO ARTIST(name, email) VALUES ('Ellen', 'ell3n.ch4n@gmail.com');
INSERT INTO ARTIST(name, email) VALUES ('Alice', 'alice.qin00@gmail.com');
INSERT INTO ARTIST(name, email) VALUES ('Tina Yu', 'ty@tinayuartist.com');

INSERT INTO CUSTOMER(username, password, shipping_address) VALUES ('Bob', '123', 'A1A 1A1');
INSERT INTO CUSTOMER(username, password, shipping_address) VALUES ('Joe', '456', 'B1B 1B1');
INSERT INTO CUSTOMER(username, password, shipping_address) VALUES ('Amy', '789', 'C1C 1C1');

INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Cabin Window', 'cabin_window.jpeg', 'drawing', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Cardinal', 'cardinal.jpeg', 'painting', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Deer', 'deer.jpeg', 'polymer_clay', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Japanese Lantern', 'Japanese_lantern.jpeg', 'ceramics', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Kingfisher', 'kingfisher.jpeg', 'painting', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Kitchenware Still-life', 'kitchenware_still_life.jpeg', 'drawing', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Lucky Cat Piggy Bank', 'lucky_cat_bank.jpeg', 'ceramics', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Panda Stack Charm', 'panda_stack.jpeg', 'polymer_clay', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Pangolin Linocut', 'pangolin.jpeg', 'linography', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Flower Pitcher', 'pitcher_flower.jpeg', 'ceramics', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Ramen Charm', 'ramen.jpeg', 'polymer_clay', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Seaturtle', 'seaturtle.jpeg', 'polymer_clay', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Snowy Owl', 'snowy_owl.jpeg', 'painting', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Tiger', 'tiger.jpeg', 'polymer_clay', 1, 25.00, 1);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Turtle Stack Charm', 'turtle_stack.jpeg', 'polymer_clay', 1, 25.00, 1);

INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Underwater Bedroom', 'bedroom.jpg', 'digital', 1, 35.00, 2);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Spring Awakening', 'butterfly.jpg', 'painting', 1, 35.00, 2);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Diner', 'diner.jpg', 'digital', 1, 35.00, 2);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Bedroom', 'cove.jpg', 'digital', 1, 35.00, 2);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Russion Dolls', 'doll.jpg', 'digital', 1, 35.00, 2);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Tiny Home', 'orange.jpg', 'digital', 1, 35.00, 2);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Table by the Seaside', 'table.jpg', 'digital', 1, 35.00, 2);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Winter Landscape', 'winter.jpg', 'digital', 1, 35.00, 2);

INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('The Lost Princess', 'cat_princess.png', 'epoxy_clay', 1, 3500, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Gold Dragon', 'gold_dragon.png', 'epoxy_clay', 1, 1200, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('By The Shore', 'by_the_shore.png', 'epoxy_clay', 1, 4000, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('A New Beginning', 'a_new_beginning.png', 'epoxy_clay', 1, 1800, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Adore', 'adore.png', 'epoxy_clay', 1, 1600, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Before I Wake Up', 'before_i_wake_up.png', 'epoxy_clay', 1, 3200, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Dancing Flames By The Sea', 'dancing_flames_by_the_sea.png', 'epoxy_clay', 1, 4500, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('Family', 'family.png', 'epoxy_clay', 1, 3200, 3);
INSERT INTO ARTWORK(title, image, medium, stock, price, artist_id) VALUES ('The Lost Princess', 'healing.png', 'epoxy_clay', 1, 1700, 3);


/*INSERT INTO CART_ITEM(artwork_id, customer_id, quantity) VALUES (?, ?, ?);
INSERT INTO PURCHASES(artwork_id, customer_id, quantity) VALUES (?, ?, ?);
*/