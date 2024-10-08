var router = require('../routes/admin/novedades');
var pool = require('./bd');

async function getNovedades() {
    try {
        const query = 'select * from novedades order by id desc';
        const rows = await pool.query(query);
        console.log(rows);
        return rows;
    } catch (error) {
        console.error('Error al obtener novedades:', error)
        throw error;
    }
    // var query = 'select * from novedades order by id desc';
    // var rows = await pool.query(query);
    // return rows;   
}

async function insertNovedad (obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}

async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id) {
    try {
        const query = 'select * from novedades where id = ?';
        const rows = await pool.query(query, [id]);
        console.log(rows);
        return rows[0]
    } catch (error) {
        console.error('Error al obtener la novedad:', error);
        throw error;
    }
    // var query = 'select * from novedades where id = ?';
    // var rows = await pool.query(query, [id]);
    // return rows[0];
}

async function modificarNovedadById(obj, id) {
    try {
        var query = 'update novedades set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getNovedades, insertNovedad, deleteNovedadesById, getNovedadById, modificarNovedadById}