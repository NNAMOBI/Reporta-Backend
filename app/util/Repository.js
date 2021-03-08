"use strict"
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * * Using clean architecture pattern called repository pattern to <br/>
 *        build a superclass for all the subclass in the different models/ tables: - 1
 * class which contains parent model for the project -1
 * using an ORM framework ( object relational mapping framework) to call models(table) DB -2
 * Defining the methods to perform the mysql queries using sequelize library to map the object  to the database -3
 */


class Repository {
    constructor(Model){
        this.Model = Model;
        this.create = this.create.bind(this);
        
    }


    create(payload){
        return this.Model.create(payload)
    }

    findOrCreate(condition, defaults) {
        return this.Model.findOrCreate({where: condition, defaults});
    }

    findAll(condition) {
        return this.Model.findAll({where: condition});
    }

    find(id) {
        return this.Model.findByPk(id);
    }

    findOne(condition){
        return this.Model.findOne({where: condition});
    }

    all (condition){
        return this.Model.findAll(condition);
    };

    update(condition, update) {
        return this.Model.update(update, {where: condition})
    }
    async paginate(condition = {}, page, limit, orderBy, order) {
        console.log("Con",condition);
        const offset = limit * (page - 1);
        const query = {};
        if (offset && offset > 0)
            query.offset = offset;

        query.limit = parseInt(limit);
        const {count, rows} = await this.Model.findAndCountAll({
            where: condition,
            order: [[orderBy || 'id', order || 'DESC']],
            ...query
        });


        return {
            page: parseInt(page),
            limit: parseInt(limit),
            pages: Math.ceil(count / limit),
            total: count,
            data: rows
        }
    }
   
    destroy(condition) {
        return this.Model.destroy({where: condition});
    }
}


module.exports = Repository;