import React, { useState, useEffect, useContext } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { COUNTRY_CODES } from "../Constants/config";
import { INCOME_YEAR } from "../Constants/config";
import { TaxContext } from "./TaxForm";

const CalculateTaxForm = (props) => {
	const [countryNames, setCountryNames] = useState(null);
	const [incomeValues, setIncomeValues] = useState(null);
	const { country, income_year, income } = useContext(TaxContext);
	const [countryValue, setCountryValue] = country;
	const [incomeYear, setIncomeYear] = income_year;
	const [incomeValue, setIncomeValue] = income;
	// const submitHandler = () => {};

	useEffect(() => {
		const names = COUNTRY_CODES.map((countryValue) => countryValue.name);
		setCountryNames(names);
		const incomes = INCOME_YEAR.map((incomeValue) => incomeValue.name);
		setIncomeValues(incomes);
	}, []);

	// country: [country, setCountry],
	// income_year: [incomeYear, setIncomeYear],
	// income: [income, setIncome]

	return (
		<div style={{ padding: "20px" }}>
			<h2>Calculate your tax</h2>
			<Form onSubmit={props.submitHandler}>
				<Form.Group controlId="country">
					<Form.Label>Select your country of residence *</Form.Label>
					<Form.Control
						required
						as="select"
						value={countryValue}
						onChange={(e) => setCountryValue(e.target.value)}
					>
						<option value="">Select...</option>
						{countryNames &&
							countryNames.map((name, index) => (
								<option key={index} value={name}>
									{name}
								</option>
							))}
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="incomeYear">
					<Form.Label>Select an income year *</Form.Label>
					<Form.Control
						required
						as="select"
						value={incomeYear}
						onChange={(e) => setIncomeYear(e.target.value)}
					>
						<option value="">Select...</option>
						{incomeValues &&
							incomeValues.map((name, index) => (
								<option key={index} value={name}>
									{name}
								</option>
							))}
					</Form.Control>
				</Form.Group>

				<InputGroup className="mb-1">
					<label htmlFor="basic-url">
						Enter your total taxable income for the income year *
					</label>
					<InputGroup.Prepend>
						<InputGroup.Text>$</InputGroup.Text>
					</InputGroup.Prepend>
					<Form.Control
						required
						type="text"
						value={incomeValue}
						onChange={(e) => setIncomeValue(e.target.value)}
						style={{ padding: "0", paddingLeft: "1em" }}
					></Form.Control>
					<InputGroup.Append>
						<InputGroup.Text>.00</InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>

				<Button
					type="submit"
					// onClick={props.submitHandler}
					style={{
						margin: "20px"
					}}
					size="sm"
					variant="primary"
				>
					Calculate
				</Button>
			</Form>
		</div>
	);
};

export default CalculateTaxForm;
