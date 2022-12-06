import { Monster } from "../../App";

import "./card.styles.css";

type CardProps = {
	monster: Monster;
};

const Card = (props: CardProps) => {
	const { id, name, email } = props.monster;
	return (
		<div className="card-container" key={id}>
			<img
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
				alt="monster"
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
