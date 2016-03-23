module.exports = function(sequelize, DataTypes) {
        return sequelize.define('Users', {
              FirstName: {
                type: DataTypes.STRING
              },
              LastName: {
                type: DataTypes.STRING
              },
              Address: {
                type: DataTypes.STRING
              },
              City: {
                type: DataTypes.STRING
              },
              Zipcode: {
                type: DataTypes.INTEGER
              }
            },
            {
              timestamps: false,
          });
    };
