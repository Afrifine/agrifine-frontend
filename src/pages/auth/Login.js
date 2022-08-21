import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { login } from '../../redux/users/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(login({
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            password: userCredential.user.password,
            uid: userCredential.user.uid,
          }));
          navigate('/');
        }).catch((error) => {
          setError(error.message);
        }).finally(() => {
          setEmail('');
          setPassword('');
        });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div className="form-group">
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              <small id="emailHelp" className="form-text text-muted">We &apos;ll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success mt-4">Submit</button>

          </form>
        </div>
      </div>
    </div>

  );
}

export default Login;
