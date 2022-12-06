import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.fetch";
import "./App.css";

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				"https://jsonplaceholder.typicode.com/users"
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				className="search-box"
				placeholder="search monsters"
				onChangeHandler={onSearchChange}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;