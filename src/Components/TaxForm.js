import React, { useState, useEffect, useRef, useContext } from "react";
import "./taxForm.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "../image/background.png";
import CalculateTaxForm from "./CalculateTaxForm";
import TaxResult from "./TaxResult";
import EstimatedTaxableIncome from "./EstimatedTaxableIncome";
const TaxContext = React.createContext();

const TaxForm = () => {
	const divRef = useRef(null);
	const submitHandler = (e) => {
		e.preventDefault();
		if (!slideToRight) {
			divRef.current.classList.contains("slide-left") &&
				divRef.current.classList.remove("slide-left");
			divRef.current.classList.add("slide-right");
		} else {
			if (divRef.current.classList.contains("slide-right")) {
				divRef.current.classList.remove("slide-right");
				divRef.current.classList.add("slide-left");
			}
		}
		setSlideToRight((prev) => !prev);
	};

	const [slideToRight, setSlideToRight] = useState(false);

	const [country, setCountry] = useState("");
	const [incomeYear, setIncomeYear] = useState("");
	const [income, setIncome] = useState(null);

	return (
		<div
			style={{
				maxWidth: "700px",
				margin: "8% auto",
				background: "white",
				borderRadius: "5px"
			}}
		>
			<TaxContext.Provider
				value={{
					country: [country, setCountry],
					income_year: [incomeYear, setIncomeYear],
					income: [income, setIncome]
				}}
			>
				<Row>
					<Col sm={6}>
						<div ref={divRef}>
							<img
								style={{
									width: "100%",
									height: "auto",
									borderRadius: "5px",
									padding: "20px"
								}}
								src={backgroundImage}
								alt=""
							/>
						</div>

						{slideToRight ? (
							<div className="taxResultWrapper">
								<TaxResult submitHandler={submitHandler} />
							</div>
						) : (
							<div
								style={{
									position: "absolute",
									top: "100px",
									left: "5em",
									fontSize: "0.8em",
									color: "white"
								}}
							>
								<h2 style={{ textAlign: "center", color: "white" }}>
									Tax-o-tron
								</h2>
								<p>The free and simple online tax calculator</p>
							</div>
						)}
					</Col>

					<Col sm={6}>
						{slideToRight ? (
							<EstimatedTaxableIncome />
						) : (
							<div className="calculateTaxFormWrapper">
								<CalculateTaxForm
									submitHandler={submitHandler}
								></CalculateTaxForm>
							</div>
						)}
					</Col>
				</Row>
			</TaxContext.Provider>
		</div>
	);
};

export default TaxForm;
export { TaxContext };
