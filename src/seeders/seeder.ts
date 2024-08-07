import { QueryInterface } from 'sequelize';
import sequelizeConfig from '../config/db';
import { InsertEntities } from './entitites.seeder';
import { InsertRoles } from './roles.seeder';
import { InsertPermissions } from './permissions.seeder';

export const queryInterface: QueryInterface = sequelizeConfig.getQueryInterface();

const entities2Insert = [
    {
        'name': 'InsertEntities',
        'content': InsertEntities
    },
    {
        'name': 'InsertRoles',
        'content': InsertRoles
    },
    {
        'name': 'InsertPermissions',
        'content': InsertPermissions
    }
]

export async function runSeeders() {
  // Seeding Entities Entity
  entities2Insert.forEach(async (entity2insert) => {
    try{
        await entity2insert.content()
    }catch(error){
        console.log(`\nSeeder ${entity2insert.name} could not be executed: `, error)
    }
  })
};