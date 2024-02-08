import sqlite3
conn = sqlite3.connect("hotel.db")
cur = conn.cursor()

sql = """
CREATE TABLE HoteleTabela (
    hotelID text,
    nazwa test,
    miasto text,
    osoby int,
    dni int,
    zwierzeta text,
    sniadanie text,
    parking text,
    basen text,
    widok text,
    primarykey(hotelID)
)
"""
cur.executee(sql)
print("HotelTabela została stworzona")

conn.commit()
conn.close()