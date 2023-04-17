import * as React from 'react';

function validateUser(userInfos) {
  if (!checkDateFormat(userInfos)) {
      return checkDateFormat(userInfos);
  }
  if (!checkPasswords(userInfos)) {
      return checkPasswords(userInfos);
  }
  return true;
}

export default function checkEmailPseudo(userInfos) {
  const userId = auth.currentUser.uid;
  return onValue(ref(db, '/users/' + userId), (snapshot) => {
    const pseudo = (snapshot.val() && snapshot.val().pseudo) || 'Anonymous';
    // ...
  }, {
    onlyOnce: true
  });
}