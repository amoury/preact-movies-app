import { h, Component } from 'preact';
import { Router } from 'preact-router';
import {ThemeProvider} from 'styled-components';

import defaultTheme from '../themes/default';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Recommendations from '../routes/recommendations';
import Movies from '../routes/movies';
import TV from '../routes/tv';
import Favorites from '../routes/favorites';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<ThemeProvider theme={defaultTheme}>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Recommendations path="/recommendations/" />
						<Movies path="/movies/" />
						<TV path= "/tv" />
						<Favorites path="/favorites" />
					</Router>
				</ThemeProvider>
			</div>
		);
	}
}
