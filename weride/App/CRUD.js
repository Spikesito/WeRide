import { db } from "./firebase";
import { get, onValue, push, ref, set, update } from "firebase/database";
import "@firebase/database";

export const createData = (path, data) => {
  const reference = ref(db, path);
  const newRef = push(reference)
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
};

export const updateData = (path, data) => {
  const reference = ref(db, path);
  return update(reference, data);
};

export const deleteData = (path) => {
  const reference = ref(db, path);
  return remove(reference);
};


// SPECIFIC FUNCTIONS FOR MESSAGES / TRIPS / BIKES / FRIENDS

// Messages
export const createMessage = async (message) => {
  const messageRef = await createData(`messages/${message.id}`, {
    id: message.id,
    content: message.contenu,
    creator: message.auteur,
    conversation: message.conversation,
  });

  // Update the conversation by adding the new message ID to its messages list
  const conversationPath = `conversations/${message.conversation}`;
  const conversation = await readData(conversationPath);
  if (conversation) {
    conversation.messages.push(message.id);
    await updateData(conversationPath, conversation);
  } else {
    console.error("Conversation not found");
  }

  return messageRef;
};

// Trips
export const createTrip = async (trip, data) => {
  const tripRef = await createData(`trips/${trip.id}/`, data);
  return tripRef;
};

// Following People (Add a friend)
export const followPerson = async (userId, friendId) => {
  const userFriendsPath = `users/${userId}/friends/`;
  const userFriends = await readData(userFriendsPath);
  if (!userFriends.includes(friendId)) {
    userFriends.push(friendId);
    await updateData(userFriendsPath, userFriends);
    return true;
  } else {
    console.error("Already following the person");
    return false;
  }
};

// Adding bikes to your profile
export const addBikeToProfile = async (userId, bike) => {
  const userBikesPath = `users/${userId}/bikes`;
  const userBikes = await readData(userBikesPath);
  if (!userBikes.find((b) => b.id === bike.id)) {
    userBikes.push(bike);
    await updateData(userBikesPath, userBikes);
    return true;
  } else {
    console.error("Bike already added to the profile");
    return false;
  }
};