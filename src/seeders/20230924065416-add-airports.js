'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name:'Kempegowda International Airport',
        cityId:78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Mysuru International Airport',
        cityId:78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Mangaluru International Airport',
        cityId:78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Indera Gandhi International Airport',
        cityId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
