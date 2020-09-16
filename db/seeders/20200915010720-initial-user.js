import bcrypt from 'bcrypt'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'test',
        password: bcrypt.hashSync('password', 10),
        avatar: '',
        created_at: Sequelize.fn('NOW'),
        updated_at: Sequelize.fn('NOW'),
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
