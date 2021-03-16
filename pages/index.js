import React from 'react';
import ReactTooltip from 'react-tooltip';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { passwordStrength } from 'password-strength-score';

import LengthBox from '../components/LengthBox';
import LettersBox from '../components/LettersBox';
import NumbersBox from '../components/NumbersBox';
import SymbolsBox from '../components/SymbolsBox';
import GenerateButton from '../components/GenerateButton';
import OutputBox from '../components/OutputBox';
import SocialMediaList from '../components/SocialMediaList';


const validateForm = (errors) => {
	let valid = true;
	Object.values(errors).forEach(
		(val) => val && (valid = false)
	);
	return valid;
}

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
			passwordStrength: 0,
			length: 16,
			useUppercaseLetters: true,
			useLowercaseLetters: true,
			useNumbers: true,
			useSymbols: false,
			animationLengthBlinking: false,
			animationCopied: false,
			animationGenerateButton: false,
			errors: {
				length: false
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updatePassword() {
		var characters = [''];
		if (this.state.useUppercaseLetters) characters = characters.concat(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
		if (this.state.useLowercaseLetters) characters = characters.concat(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
		if (this.state.useNumbers) characters = characters.concat(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
		if (this.state.useSymbols) characters = characters.concat(['\\', '|', '!', '"', '@', '#', '£', '$', '§', '%', '&', '/', '{', '(', '[', ')', ']', '=', '}', '?', "'", '«', '»', '+', '*', '¨', '´', '`', '~', '^', 'º', 'ª', ',', ';', '.', ':', '-', '_', '<', '>']);

		var response = '';
		for (var i = 0; i < this.state.length; i++)
			response += characters[Math.floor(Math.random() * characters.length)];

		this.handleChange('password', response);
		this.handleChange('passwordStrength', passwordStrength(response));
	}

	handleChange(name, value) {
		let errors = this.state.errors;
		switch (name) {
			case 'length':
				errors.length = (isNaN(value) || value < 1 || value > 1024) ? true : false;
				break;
			default:
				break;
		}
		this.setState({ errors, [name]: value });
	}

	handleSubmit() {
		if (validateForm(this.state.errors))
			this.updatePassword();
		else {
			if (this.state.errors.length)
				this.handleChange('animationLengthBlinking', true)
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Password Generator</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main className={styles.main}>
					<h1>Password Generator</h1>
					<h4>by @mlCarvalhooo</h4>
					<form>
						<ReactTooltip className={styles.tooltip} multiline />

						<LengthBox state={this.state} handleChange={this.handleChange} />
						<LettersBox state={this.state} handleChange={this.handleChange} />
						<NumbersBox state={this.state} handleChange={this.handleChange} />
						<SymbolsBox state={this.state} handleChange={this.handleChange} />
						<GenerateButton state={this.state} handleChange={this.handleChange} onClick={this.handleSubmit} />
						<OutputBox state={this.state} handleChange={this.handleChange} />
					</form>
				</main>
				<SocialMediaList />
			</div>
		);
	}
}