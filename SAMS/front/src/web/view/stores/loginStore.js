import { atom } from "recoil";

export const grantType = atom({
	key: "grantType",
	default: "bearer",
});

export const loginState = atom({
	key: "loginState",
	default: false,
});