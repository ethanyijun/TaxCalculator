import React, { useContext } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { TaxContext } from "./TaxForm";

const TaxResult = (props) => {
	const { country, income_year, income } = useContext(TaxContext);
	const [countryValue] = country;
	const [incomeYear] = income_year;
	const [incomeValue] = income;
	return (
		<div>
			<Form onSubmit={props.submitHandler}>
				<Form.Group controlId="country">
					<Form.Label style={{ color: "black" }}>
						Select your country of residence *
					</Form.Label>
					<Form.Control
						style={{ zIndex: "0" }}
						as="select"
						value={countryValue}
						disabled
					>
						<option value="">{countryValue}</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="incomeYear">
					<Form.Label style={{ color: "black" }}>
						Select an income year *
					</Form.Label>
					<Form.Control
						style={{ zIndex: "0" }}
						as="select"
						value={incomeYear}
						disabled
					>
						<option value="">{incomeYear}</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="income">
					{/* <Form.Label>
						Enter your total taxable income for the income year *
					</Form.Label>
					<Form.Control
						disabled
						as="textarea"
						value={incomeValue}
					></Form.Control> */}
					<InputGroup className="mb-1">
						<label style={{ color: "black" }} htmlFor="basic-url">
							Enter your total taxable income for the income year *
						</label>
						<InputGroup.Prepend>
							<InputGroup.Text>$</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control
							disabled
							required
							type="text"
							value={incomeValue}
							style={{ padding: "0", paddingLeft: "1em" }}
						></Form.Control>
						<InputGroup.Append>
							<InputGroup.Text>.00</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
					<Button
						type="submit"
						style={{
							margin: "20px"
						}}
						size="sm"
						variant="primary"
					>
						Go Back to previous screen
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default TaxResult;
