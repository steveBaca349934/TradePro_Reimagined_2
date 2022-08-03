import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = () => {
    const [formData, setFormData] = useState({
    email: '',
    password: ''
});
const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = e => {
    e.preventDefault();

    //login(email, password)
};

// Is the user authenticated?
// Redirect them to the home page

return (
    <div className='container mt-5'>
        <h1>Sign In</h1>
        <p>Sign into your Account</p>
        <form onSubmit={e => onSubmit(e)}>

            <div className='form-group'>
                <input>
                    className='form-control'
                    type='email'
                    placeholders='Email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required

                </input>
            </div>

            <div className='form-group'>
                <input>
                    className='form-control'
                    type='password'
                    placeholders='Password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required

                </input>
            </div>
            <button className='btn btn-primaruy' type='submit'>Login
            </button>
        </form>
        <p className='mt-3'>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
        <p className='mt-3'>
            Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
        </p>


    </div>

    );
};

const mapStateToProps = state => ({
    // is authenticated?
})

export default connect(null, { })(Login);