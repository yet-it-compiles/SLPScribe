/**
 * @file DashboardHeader.jsx
 *
 * @description Responsible for rendering the header section for Dashboard.jsx
 * and is a critical component to the overall applications ux design.
 *
 * The component renders the 'Dashboard Overview' and defines the 'Import file',
 * 'Quick notes', and 'Quick record' buttons as well as the drop down metrics
 * overview for their daily / monthly usage and expenses.
 *
 * @requires react
 * @requires header.module.css
 * @requires notes.svg
 * @requires recording.svg
 * @requires import-file.svg
 *
 * @exports DashboardHeader
 */

import React from "react";
import styles from "./header.module.css";
import { FcDownload } from "react-icons/fc"
import { GiNotebook } from "react-icons/gi"
import { FaMicrophoneAlt } from "react-icons/fa"
import { AiOutlineDownload } from "react-icons/ai"


/**
 * Creates the dashboard heading layout, along with providing various buttons
 *
 * @returns {jsx.Element} Used on the Dashboard.
 * jsx as its header
 */
const DashboardHeader = () => {
	return (
		<header className={styles.headerContainer}>
			<p>Dashboard Overview</p>

			<button
				type="button"
				name="import file icon"
				className={styles.redButton}
			>
			<AiOutlineDownload/>
				<span>Import File</span>
			</button>

			<button type="button" name="notes">
				<GiNotebook/>
				<span>Quick Notes</span>
			</button>

			<button type="button" name="record">
				<FaMicrophoneAlt/>
				<span>Quick Record</span>
			</button>

			<select>
				<option value="option1">This Months Statistics</option>
				<option value="option2">Todays Statistics</option>
			</select>
		</header>
	);
};

export default DashboardHeader;
