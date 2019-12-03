import { h } from 'preact';
import { Link } from 'preact-router/match';
import SearchBar from '../search-bar';
import SideNav from '../side-nav';

const Header = () => (
	<header>
		<SearchBar />
		<SideNav />
	</header>
);

export default Header;
