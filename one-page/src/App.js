import React, { Component } from 'react';
import './App.css';
import { establishments } from './components/fixtures/Fixtures';
import Establishment from './components/establishments/Establishment';
import Rebase from 're-base';
import app from './Base';
let base = Rebase.createClass(app.database());

class App extends Component {
	constructor(props) {
		// Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
		super(props);
		// On définit le state de notre component que l'on hérite de la classe "Component"
		// Cela remplace la fonction "getInitialState"
		this.state = {
			pseudo: 'Inconnu',
			// Valeur de l'input
			searchStringUser: ''
		};
	}
	//Fonction qui récupère l'event de l'input et récupère sa valeur pour la mettre dans le state
	handleChange(e) {
		this.setState({ searchStringUser: e.target.value });
	}
	componentWillMount() {
		base.removeBinding(this.firebase);;
	}

	componentDidMount() {
		this.firebase = base.syncState('count', {
			context: this,
			state: 'count',
			asArray: true,
		});
	}

	// On définit la fonction appelée lors d'un clic sur le lien "Changer le pseudo !"
	// la syntaxe  " nomFonction = () => {} " nous permet de conserver le contexte `this` du scope courant. (Ici, la classe App)
	randomPseudo = () => {
		// On randomize le pseudo
		let randomPseudo = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		const size = Math.floor(Math.random() * 10) + 5;
		for (let i = 0; i < size; i++) {
			randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		// On met à jour le state via la fonction "setState" héritée de la classe Component
		this.setState({
			pseudo: randomPseudo
		});
	};

	render() {
		const establishmentFilter = establishments.filter((searchText) => {
			let search = searchText.name + ' ' + searchText.description;
			return search.toLowerCase().match(this.state.searchStringUser);
		});

		const listEstablishment = establishmentFilter.map((establishment) => {
			return <Establishment key={establishment.id} establishment={establishment} />;
		});

		return (
			<div className="App">
				<header className="App-header">
					<h2>
						Welcome "{this.state.pseudo}" to {this.props.title}
					</h2>
				</header>
				<div className="App-intro">
					<p>
						{' '}
						<a onClick={this.randomPseudo}>Changer le pseudo !</a>{' '}
					</p>
					<div>
						<input
							type="text"
							placeholder="search"
							value={this.state.searchStringUser}
							onChange={this.handleChange.bind(this)}
						/>
					</div>
					<section>{listEstablishment}</section>
				</div>
			</div>
		);
	}
}
export default App;
