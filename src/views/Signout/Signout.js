import React from 'react';
import { auth } from "../firebase";


function Signout() {
  return (
    <Button color="info" onClick={auth.doSignOut}>
    Sign Out
  </Button>
  );
}

export default Signout;
