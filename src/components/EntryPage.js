import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './entryPage.css';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';

export default function EntryPage() {
  const [formLoad, setFormLoad] = useState('login')

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === 'login' && <LoginForm setFormLoad={setFormLoad}/>}
        {formLoad === 'reset' && <ResetPassword setFormLoad={setFormLoad}/>}
      </Jumbotron>
    </div>
  )
}
