import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('../../Data/db.sqlite');

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM userTable;",
          [],
          (_, { rows: { _array } }) => {
            resolve(_array);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  };

export const addUser = (firstname, pseudo, mail, phoneNumber, birthDate, password) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO userTable(firstname, pseudo, mail, phoneNumber, birthDate, password) VALUES (?, ?, ?, ?, ?, ?);',
        [firstname, pseudo, mail, phoneNumber, birthDate, password],
        (tx, results) => {
          console.log('User inserted');
        },
        (error) => {
          console.log('Error inserting user: ', error);
        }
      );
    });
  };

// INSERT INTO userTable(firstname, pseudo, mail, phoneNumber, birthDate, password) VALUES (?, ?, ?, ?, ?, ?);
// "Emile", "Spikes", "emileseguret@icloud.com", "0781809049", "24/01/2001", "MDPCrypté"
// addUser("Emile", "Spikes", "emileseguret@icloud.com", "0781809049", "24/01/2001", "MDPCrypté");
