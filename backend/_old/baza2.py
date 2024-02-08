Table pokoje {
  id_pokoju integer(3) [primary key]
  widokNa Varchar(20)
  ileOsob integer(1)
}

Table uzytkownicy {
  id_uzytkownika integer(10) [primary key]
  nazwa varchar
  haslo varchar
  email varchar
  dataUrodzenia date
  telefon integer(9)
}

Table rezerwacja {
  id_rezerwacji integer [primary key]
  id_uzytkownika varchar [ref: uzytkownicy]
  id_pokoju varchar [ref: pokoje]
  
  dataStart date
  dataKoniec date
  cena float(10)
}