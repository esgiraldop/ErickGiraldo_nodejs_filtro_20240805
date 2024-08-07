import { queryInterface } from "./seeder";

export async function InsertUsers(){
    await queryInterface.bulkInsert('users', [
        {
            email: 'Admin',
            password: '123',
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]);
}