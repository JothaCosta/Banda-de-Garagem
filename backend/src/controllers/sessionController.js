const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const { email , password } = request.body;

        const musician = await connection('musician')
            .where('email', email && 'password', password)
            .select('name')
            .first();

        if (!musician){
            return response.status(400).json({error: 'Usuario não encontrado'});
        }

        return response.json(musician);
    }
}

// Verificar codigo