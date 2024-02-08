import sqlite3

# Połączenie z bazą danych
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# Operacja CREATE - Utwórz
def create_record(name, age):
    cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", (name, age))
    conn.commit()

# Operacja READ - Odczytaj
def read_records():
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    for row in rows:
        print(row)

# Operacja UPDATE - Zaktualizuj
def update_record(user_id, new_age):
    cursor.execute("UPDATE users SET age = ? WHERE id = ?", (new_age, user_id))
    conn.commit()

# Operacja DELETE - Usuń
def delete_record(user_id):
    cursor.execute("DELETE FROM users WHERE id = ?", (user_id,))
    conn.commit()

# Przykład użycia
create_record('John Doe', 25)
create_record('Jane Doe', 30)

print("Po dodaniu rekordów:")
read_records()

update_record(1, 26)

print("Po aktualizacji wieku:")
read_records()

delete_record(2)

print("Po usunięciu rekordu:")
read_records()

# Zamknięcie połączenia z bazą danych
conn.close()