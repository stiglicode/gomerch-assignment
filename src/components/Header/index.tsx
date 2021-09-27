import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { sideMenuState } from "../bin/store";
import { HeaderWrapper, Button } from "./styles";

const Header = (): JSX.Element => {
	const [status, setStatus] = useRecoilState(sideMenuState);

	const handleClick = () => {
		if (!status) {
			return setStatus(true);
		} else {
			return setStatus(false);
		}
	};

	return (
		<HeaderWrapper>
			<Button onClick={handleClick}>Open menu</Button>
		</HeaderWrapper>
	);
};

export default Header;
