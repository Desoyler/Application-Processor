
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;
// server.js (Node.js + Express)
const cors = require('cors');
app.use(cors()); // Разрешит все источники (для разработки)

// Настройка подключения к БД
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'diplomka',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(express.json()); // Add this ONCE, near the top, before routes!

app.post('/api/zayavki', async (req, res) => {
  try {
    const { shortpage, type, status, text, otschet, sender, location } = req.body;
    const [result] = await pool.query(
      `INSERT INTO zayavki (shortpage, type, status, text, otschet, sender, location)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [shortpage, type, status, text, otschet || '', sender, location]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка при добавлении заявки' });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        u.idusers AS id,
        u.login,
        u.pass AS password,
        r.name AS profession,
        u.name AS firstName,
        u.surename AS middleName,
        u.fam AS lastName,
        CONCAT(u.name, ' ', u.surename, ' ', u.fam) AS workername,
        c.mail AS email,
        c.tel AS phone,
        DAY(u.birthday) AS birthDay,
        MONTH(u.birthday) AS birthMonth,
        YEAR(u.birthday) AS birthYear,
        u.sex AS state,
        d.passport,
        d.inn,
        d.snils,
        d.oms,
        d.vodila AS driverLicense,
        u.active
      FROM users u
      LEFT JOIN role r ON u.role_idrole = r.idrole
      LEFT JOIN comunicate c ON u.comunicate_idcomunicate = c.idcomunicate
      LEFT JOIN doki d ON u.doki_iddoki = d.iddoki
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});



app.get('/api/zayavki', async (req, res) => {
  try {
    // Получаем все заявки
    const [zayavki] = await pool.query('SELECT * FROM zayavki');
    // Получаем все сообщения чата
    const [chats] = await pool.query('SELECT * FROM chat');

    // Склеиваем чаты к заявкам по id
    const result = zayavki.map(z => ({
      ...z,
      chat: chats
        .filter(c => c.message_id === z.id)
        .map(c => ({
          id: c.id,
          message: c.message,
          timestamp: c.timestamp,
          sender: c.sender
        }))
    }));

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'Ошибка сервера'});
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});