import { atom } from "recoil";

const sideMenuState = atom({
	key: "side",
	default: true,
});

export { sideMenuState };
