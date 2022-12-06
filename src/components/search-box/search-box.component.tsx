import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = (props: SearchBoxProps) => {
	const { className, placeholder, onChangeHandler } = props;
	return (
		<input
			className={className}
			type="search"
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
