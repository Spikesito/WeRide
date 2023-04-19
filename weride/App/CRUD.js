import { db } from "./firebase";
import { child, get, onValue, ref, set, update } from "firebase/database";
import { firebase } from "@firebase/app";
import "@firebase/database";

export const createData = (path, data) => {
  const reference = ref(db, path);
  const newRef = reference.push();
  return set(newRef, data);
};

export const createNewUser = (path, data) => {
  const reference = ref(db, path);
  return set(reference, data);
}

export const readData = async (path) => {
  // await ref(db, path).onValue("value", (snapshot) => {
  //   return snapshot.val();
  // }); 
  return get(ref(db, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        return 0;
      }
    }).catch((error) => {
      console.error(error);
    });
  onValue(ref(db, path), (snapshot) => {
    return snapshot.val()
  })
  // return snapshot.val();
};

export const updateData = (path, data) => {
  const reference = ref(db, path);
  return update(reference, data);
};

export const deleteData = (path) => {
  const reference = ref(db, path);
  return remove(reference);
};