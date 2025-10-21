export default (sequelize, Sequelize) => {
  const Location = sequelize.define("location", {
    name: {
      type: Sequelize.STRING,
    },
    zip: {
      type: Sequelize.STRING,
    }
  })
  return Location
}