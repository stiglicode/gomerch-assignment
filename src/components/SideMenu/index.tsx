import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Title } from "../../style/components/titles";
import { sideMenuState } from "../bin/store";
import { SideMenuWrapper } from "./styles";

const SideMenuContent = (props: any): JSX.Element => {
	const state = useRecoilValue(sideMenuState);
	return (
		<div className={props.className}>
			<Title>Menu is {state ? "ON" : "OFF"}</Title>
		</div>
	);
};
const StyledSideMenu = styled(SideMenuContent)`
	background-color: #f5f5f5;
	border-right: solid 1px #d8d8d8;
	position: relative;
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	transition: 0.2s ease-in;
	left: ${props => (props.active === true ? "0" : "-100%")};
`;

const SideMenu = (): JSX.Element => {
	const state = useRecoilValue(sideMenuState);

	return (
		<SideMenuWrapper>
			<StyledSideMenu active={state} />
		</SideMenuWrapper>
	);
};

export default SideMenu;
