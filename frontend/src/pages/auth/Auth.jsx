import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';

const Auth = () => {
  const [userExist, setUserExist] = useState(true);

  return (
    <div>
      {userExist ? <Signin setUserExist={setUserExist} /> : <Signup setUserExist={setUserExist} />}
    </div>
  );
};

export default Auth;
