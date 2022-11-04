
CREATE TABLE customer (
    id INTEGER PRIMARY KEY,
    name Text,
    amount INTEGER,
    broker_id INTEGER
);

INSERT INTO customer( id, name, amount, broker_id)
    values(
        {
            1, 
            'sam',
            3000, 
            4
        },
        {
            2, 
            'john',
            4000, 
            2,
        },
        {
            3,
            'mack',
            5000,
            2
        },
        {
            4, 
            'test',
            3000, 
            3
        },
        {
            5, 
            'june',
            2000, 
            3
        },
        {
            6, 
            'mike',
            4000,
            1
        },
        {
            7, 
            'annie',
            4000, 
            2
        },
        {
            8, 
            'micheal',
            2000, 
            1
        },
        {
            9, 
            'tom',
            2000, 
            4
        },
        {
            10, 
            'jason',
            6000, 
            4
        }
    )