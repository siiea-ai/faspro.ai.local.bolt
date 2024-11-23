import React, { useState } from 'react';
    import firebase from '../firebase';

    function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
          alert('Logged in successfully!');
        } catch (error) {
          alert(error.message);
        }
      };

      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

    export default Login;
> setEmail(e.target.value)} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }

    export default Login;
