import React from "react";
import { useRecoilValue } from "recoil";
import { Title } from "../../style/components/titles";
import { sideMenuState } from "../bin/store";
import { MainWrapper } from "./styles";

const Main = (): JSX.Element => {
	const state = useRecoilValue(sideMenuState);

	return (
		<MainWrapper>
			<Title>Menu is {state ? "ON" : "OFF"}</Title>
		</MainWrapper>
	);
};

export default Main;
