import pg from 'pg'
const { Pool } = pg

import "dotenv/config"
const pool = new Pool()

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})
 
const client = await pool.connect()
const res = await client.query('SELECT * FROM equipamentos')
console.log(res.rows[0])
 
client.release()