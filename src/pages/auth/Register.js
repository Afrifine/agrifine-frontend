import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProfile, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase';
import { login } from '../../redux/users/userSlice';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendEmail = async () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        navigate('/confirm');
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !displayName.trim()) {
      setError('All fields are required');
      return;
    }
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth, displayName)
            .then(() => {
              dispatch(login({
                email: userCredential.user.email,
                displayName: userCredential.user.displayName,
                password: userCredential.user.password,
                uid: userCredential.user.uid,
              }));

              sendEmail();
            });
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
              <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Display Name" onChange={(e) => setDisplayName(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
