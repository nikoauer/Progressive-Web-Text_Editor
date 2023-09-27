import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  
  // connect to desired db 
  const jateDb = await openDB('jate', 1);

  // creat a transation to the db and its version 
  const tx = jateDb.transaction('jate', 'readwrite');

  // open object store 
  const store = tx.objectStore('jate');

  // Use put method the pass content to db 
  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log('Data PUT to the database', result);

} 

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  //connect to desired db
  const jateDb = await openDB('jate', 1);

  //create new transation to readonly
  const tx = jateDb.transaction('jate', 'readonly');

  // open up object 
  const store = tx.objectStore('jate');

  //get all the data from the db 
  const request = store.getAll();

  // get confirmation of results 
  const result = await request;
  console.log('Value of results', result);
};

initdb();
