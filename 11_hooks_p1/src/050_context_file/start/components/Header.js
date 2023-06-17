import { useTheme } from "../context/MyContext";

const Header = () => {
    const THEMES = ['light', 'dark', 'red'];
    const [theme, setTheme] = useTheme();
    const changeTheme = (e) => setTheme(e.target.value)
    return (
        <header className={`content-${theme}`}>
            {THEMES.map((newtheme) => {
                return (
                    <label key={newtheme} >
                        <input type="radio"
                            name={newtheme}
                            value={newtheme}
                            key={newtheme}
                            onChange={changeTheme}
                            checked={theme === newtheme} />{newtheme}
                    </label>
                );
            })}
        </header>
    )
};

export default Header;
