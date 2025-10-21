export default (sequelize, Sequelize) => {
  console.log({ Sequelize })
  const Location = sequelize.define("location", {
    name: {
      type: Sequalize.STRING,
    },
    zip: {
      // double check this
      type: Sequelize.INT,
    }
  })
}