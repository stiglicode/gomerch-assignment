import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SideMenu from "./components/SideMenu";
// bootstrap
import { Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
	return (
		<div className="App">
			<Container fluid>
				<Row>
					<Col sm="12">
						<Header />
					</Col>
					<Col sm="2">
						<SideMenu />
					</Col>
					<Col sm="10">
						<Main />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
