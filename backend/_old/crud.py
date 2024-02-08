# Create (Dodawanie)
def create_record(dataabse, key, value):
database[key] = value
print(f"dodano rekord: {key}: {value}")

# Read (Doczytywanie)
def read_record(database, key):
	if key in database:
		print("wartość dla klucza {key}: {dataabse[key]}")
	else:
		print(f"Rekord o kluczu {key} nie istnieje")

# Update (Aktualizacja)
def update_record(database, key, new_value):
	if key in database:
		database[key] = new_value
		print(f"Zaktualizowano reekord o kluczu {key} na wartość: {new_value}")
	else:
		print(f"Rekord o kluczu {key} nie istnieje, nie można zaktualizować")

#Delete (Usuwanie)
def delete_record(database, key):
	if key in database:
		del database[key]
		print(f"Usunięto rekord o kluczu {key}")
	else:
		print(f"Rekord o kluczu {key} nie istnieje, nie można usunąć")

# Przykład użycia
my_database = {}

# Dodawanie rekordów
create_record(my_database, '1', 'Wartość 1')
create_record(my_database, '2', 'Wartość 2')
create_record(my_database, '3', 'Wartość 3')

# Odczytywanie rekordów
read_record(my_database, '2')

# Aktualizacja rekordu
update_record(my_database, '2', 'Nowa wartość 2')

# Usuwanie rekordu
delete_record(my_database, '3')