import PouchDB from 'pouchdb';
import {v4 as uuidv4} from 'uuid';

const USER_NAME = "admin";
const USER_PASSWORD = "password"

class Service {

    static entriesDb = new PouchDB(`http://${USER_NAME}:${USER_PASSWORD}@localhost:5984/entries`);
    static usersDb = new PouchDB(`http://${USER_NAME}:${USER_PASSWORD}@localhost:5984/users`);

    static addEntry(entry) {
        return Service.entriesDb.post({id: uuidv4(), ...entry});
    }

    static addUser(user) {
        return Service.usersDb.post({id: uuidv4(), ...user});
    }

    static getEntries(type) {
        if (type === "entry") {
            return Service.entriesDb.allDocs({include_docs: true, descending: true});
        } else if (type === "user") {
            return Service.usersDb.allDocs({include_docs: true, descending: true});
        }
    }

    static deleteEntry(id, rev) {
        return this.entriesDb.remove(id, rev);
    }

    static deleteUser(id, rev) {
        return this.usersDb.remove(id, rev);
    }
}

Service.entriesDb.info();
Service.usersDb.info();

export default Service;
