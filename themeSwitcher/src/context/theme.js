import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
}); // Create a context object

export const ThemeProvider = ThemeContext.Provider; // Create a provider object 

export default function useTheme(){
    return useContext(ThemeContext);
}
