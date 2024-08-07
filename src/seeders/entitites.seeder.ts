import { queryInterface } from "./seeder";

export async function InsertEntities(){

  const entitiesNames = ['Order', 'Entities', 'Products', 'Users', 'productCarts'];

    await queryInterface.bulkInsert('entities',
      entitiesNames.map(entityName => {
        return{
          name: entityName,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      })
    );
}