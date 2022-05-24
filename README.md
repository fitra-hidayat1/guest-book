# GUEST BOOK API List

| Method | EndPoint                   | Description                                                |
| ------ | -------------------------- | ---------------------------------------------------------- |
| GET    | /api/v1/bagian             | Menampilkan seluruh data Bagian                            |
| GET    | /api/v1/bagian/{id}        | Mencari satu data Bagian berdasarkan id                    |
| POST   | /api/v1/bagian             | Menambahkan satu data Bagian                               |
| PUT    | /api/v1/bagian/{id}        | Melakukan update satu data Bagian berdasarkan id           |
| DELETE | /api/v1/bagian/{id}        | Menghapus satu data Bagian berdasarkan id                  |
| GET    | /api/v1/subbagian          | Menampilkan seluruh data Sub Bagian                        |
|        |                            | (associate dengan table Bagian)                            |
| GET    | /api/v1/subbagian/{id}     | Mencari satu data Sub Bagian berdasarkan id                |
| POST   | /api/v1/subbagian          | Menambahkan satu data Sub Bagian                           |
| PUT    | /api/v1/subbagian/{id}     | Melakukan update satu data Sub Bagian berdasarkan id       |
| DELETE | /api/v1/subbagian/{id}     | Menghapus satu data Sub Bagian berdasarkan id              |
| GET    | /api/v1/tiket-antrean      | Menampilkan seluruh data Tiket Antrean                     |
| GET    | /api/v1/tiket-antrean/{id} | Mencari satu data Tiket Antrean berdasarkan id             |
| POST   | /api/v1/tiket-antrean      | Menambahkan satu data Tiket Antrean                        |
| PUT    | /api/v1/tiket-antrean/{id} | Melakukan update satu data Tiket Antrean berdasarkan id    |
| DELETE | /api/v1/tiket-antrean/{id} | Menghapus satu data Tiket Antrean berdasarkan id           |
| GET    | /api/v1/tiket-tamu         | Menampilkan seluruh data Tiket Tamu                        |
|        |                            | (associate dengan table: Bagian, SubBag, dan TiketAntrean) |
| GET    | /api/v1/tiket-tamu/{id}    | Mencari satu data Tiket Tamu berdasarkan id                |
| POST   | /api/v1/tiket-tamu         | Menambahkan satu data Tiket Tamu                           |
| PUT    | /api/v1/tiket-tamu/{id}    | Melakukan update satu data Tiket Tamu berdasarkan id       |
| DELETE | /api/v1/tiket-tamu/{id}    | Menghapus satu data Tiket Tamu berdasarkan id              |


---

# How to run

## Server

```bash
$ cd guest-book
$ npm i
$ npm run dev
```