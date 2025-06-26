import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import { AnimatePresence, motion } from 'framer-motion';

const Auth = () => {
  const [userExist, setUserExist] = useState(true);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <AnimatePresence mode="wait">
        {userExist ? (
          <motion.div
            key="signin"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <Signin setUserExist={setUserExist} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <Signup setUserExist={setUserExist} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Auth;
