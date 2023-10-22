import { atom, useAtom } from "jotai";

const themeMode = atom({
	key: 'appThemeMode',
	default: false,
})

export const useThemeMode = () => useAtom(themeMode);
