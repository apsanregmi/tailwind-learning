import { Fragment, useState } from "react";
import styles from "./Search.module.css";

const Search = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.searchMain}>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </div>
  );
};
export default Search;
