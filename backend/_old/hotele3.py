import sqlite3

# Połączenie z bazą danych (utworzenie pliku bazy danych, jeśli nie istnieje)
conn = sqlite3.connect('hotel_database.db')

# Utworzenie obiektu kursora
cursor = conn.cursor()

# Tworzenie tabeli 'hotel'
cursor.execute('''
    CREATE TABLE IF NOT EXISTS hotel (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        location TEXT NOT NULL,
        rating REAL
    )
''')

# Tworzenie tabeli 'parking'
cursor.execute('''
    CREATE TABLE IF NOT EXISTS parking (
        id INTEGER PRIMARY KEY,
        hotel_id INTEGER,
        capacity INTEGER,
        FOREIGN KEY (hotel_id) REFERENCES hotel(id)
    )
''')

# Tworzenie tabeli 'cena'
cursor.execute('''
    CREATE TABLE IF NOT EXISTS cena (
        id INTEGER PRIMARY KEY,
        hotel_id INTEGER,
        room_type TEXT,
        price REAL,
        FOREIGN KEY (hotel_id) REFERENCES hotel(id)
    )
''')

# Zapisanie zmian i zamknięcie połączenia
conn.commit()
conn.close()