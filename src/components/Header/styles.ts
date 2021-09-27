import styled from "styled-components";

const HeaderWrapper = styled.div`
	padding: 0 1rem;
	width: 100%;
	height: 7vh;
	background-color: #b8b8b8;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Button = styled.button`
	display: block;
	border: solid 0.0625rem white;
	background: none;
	padding: 0.5rem 1rem;
	border-radius: 10rem;
	color: white;
	line-height: 1;
	font-weight: 700;
	transition: 0.2s ease-in-out;
	position: relative;
	/* box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0); */

	&:hover {
		background-color: white;
		color: #b8b8b8;
		/* box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.26); */
	}

	&:hover::after {
		inset: -7px;
		opacity: 1;
	}

	&:active {
		transform: scale(0.95);
	}

	&:active::after {
		transform: scale(1.05);
	}

	&::after {
		content: "";
		position: absolute;
		opacity: 0;
		inset: 5px;
		border: solid 0.0625rem white;
		border-radius: 10rem;
		transition: 0.2s ease-out;
	}
`;

export { HeaderWrapper, Button };
