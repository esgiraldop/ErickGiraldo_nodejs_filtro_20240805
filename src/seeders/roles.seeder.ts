import { queryInterface } from "./seeder";

export async function InsertRoles(){
    await queryInterface.bulkInsert('roles', [
        {
          name: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Client',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
}