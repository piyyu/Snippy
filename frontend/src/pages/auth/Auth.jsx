import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import ToogleTheme from '../../components/common/ToogleTheme';

const Auth = () => {
  const [userExist, setUserExist] = useState(true);

  return (
    <div>
      <ToogleTheme />
      {userExist ? <Signin setUserExist={setUserExist} /> : <Signup setUserExist={setUserExist} />}
    </div>
  );
};

export default Auth;
