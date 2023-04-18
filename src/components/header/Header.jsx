/**
 * @file Header.jsx
 *
 * @description Defines the header component of the dashboard
 *
 * @requires react
 * @requires header.module.css
 * @requires notes.svg
 * @requires recording.svg
 * @requires import-file.svg
 *
 * @exports Header
 */

import React from "react";
import styles from "./header.module.css";
import notes from "/src/assets/button-icons/notes-icon.svg";
import recording from "/src/assets/button-icons/recording-icon.svg";
import importFile from "/src/assets/button-icons/import-icon.svg";

// @TODO Extra buttons to their own components
/**
 *
 * @returns {jsx Element}
 */
const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<p>Dashboard Overview</p>

			<button
				type="button"
				name="import file icon"
				className={styles.redButton}
			>
				<img src={importFile} alt="Import File Icon" className={styles.icons} />
				<span>Import File</span>
			</button>

			<button type="button" name="notes">
				<img src={notes} alt="Quick Notes Icon" className={styles.icons} />
				<span>Quick Notes</span>
			</button>

			<button type="button" name="import">
				<img src={recording} alt="Quick Record Icon" className={styles.icons} />
				<span>Quick Record</span>
			</button>

			<select className={styles.dropDown}>
				<option value="option1">This Months Statistics</option>
				<option value="option2">Todays Statistics</option>
			</select>
		</header>
	);
};

export default Header;
