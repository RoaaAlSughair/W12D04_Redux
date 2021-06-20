import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from "jsonwebtoken";
import { setToken } from '../Reducer/login/index';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [token, setToken] = useState('');
	const [userId, setUserId] = useState('');

	useEffect(() => {
		saveToken(localStorage.getItem('token'));
	}, []);

	const state = useSelector((state) => {
		return{
			token: state.login.token,
		}
	})

	function saveToken(token) {
		const user = jwt.decode(token);
		if (user) {
			setToken(token);
			setUserId(user.userId);
			localStorage.setItem('token', token);
		}
	}

	async function login() {
		try {
			const res = await axios.post('http://localhost:5000/login', {
				email,
				password,
			});

			saveToken(res.data.token);
			setLoggedIn(true);
			dispatch(setToken(res.data));
		} catch (error) {
			setMessage(error.response.data);
		}
	}

	function logout() {
		setLoggedIn(false);
		localStorage.clear();
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		login();
		if (loggedIn) {
			history.push('/dashboard');
		}
	};

	const redirect = () => {
		if (loggedIn) {
			history.push('/dashboard');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email here"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password here"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Login</button>
			</form>

			{redirect()}
			{message && <div>{message}</div>}
		</>
	);
};

export default Login;
