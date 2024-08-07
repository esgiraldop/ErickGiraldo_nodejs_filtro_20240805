import { queryInterface } from "./seeder";

export async function InsertPermissions(){
    await queryInterface.bulkInsert('permissions', [
        // Admin for Orders
        {
            roleId: 1,
            entityId: 1,
            canCreate: true,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        // Admin for Entitites
        {
            roleId: 1,
            entityId: 2,
            canCreate: true,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        // Admin for Products
        {
            roleId: 1,
            entityId: 3,
            canCreate: true,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        // Admin for Users
        {
            roleId: 1,
            entityId: 4,
            canCreate: true,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },  
        // Admin for productCarts
        {
            roleId: 1,
            entityId: 5,
            canCreate: true,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },


        // Client for Orders
        {
            roleId: 2,
            entityId: 1,
            canCreate: true,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        // Client for Entitites
        {
            roleId: 2,
            entityId: 2,
            canCreate: false,
            canUpdate: false,
            canDelete: false,
            canGet: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        // Client for Products
        {
            roleId: 2,
            entityId: 3,
            canCreate: false,
            canUpdate: false,
            canDelete: false,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        // Client for Users
        {
            roleId: 2,
            entityId: 4,
            canCreate: false,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },  
        // Client for productCarts
        {
            roleId: 2,
            entityId: 5,
            canCreate: true,
            canUpdate: true,
            canDelete: true,
            canGet: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
      ]);
}