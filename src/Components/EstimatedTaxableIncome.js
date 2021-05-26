import React, { useContext, useState, useEffect } from "react";
import { TAX_BRACKET, TAX_THRESHOLD } from "../Constants/config";
import { TaxContext } from "./TaxForm";
import { Card } from "react-bootstrap";

const EstimatedTaxableIncome = () => {
	const { income_year, income } = useContext(TaxContext);
	const [incomeYear] = income_year;
	const [incomeValue] = income;
	const [taxableIncome, setTaxableIncome] = useState(0);
	const [firstThresholdTax, setFirstThresholdTax] = useState(0);
	const [secondThresholdTax, setSecondThresholdTax] = useState(0);
	const [thirdThresholdTax, setThirdThresholdTax] = useState(0);
	const [fourthThresholdTax, setFourthThresholdTax] = useState(0);

	const [breakdowns, setBreakdowns] = useState([]);
	useEffect(() => {
		const breakets = TAX_BRACKET[incomeYear];
		const thresholds = TAX_THRESHOLD[incomeYear];
		const incomeNumber = parseInt(incomeValue);
		if (incomeNumber > thresholds[0]) {
			if (incomeNumber <= thresholds[1])
				setFirstThresholdTax((incomeNumber - thresholds[0]) * 0.19);
			else {
				setFirstThresholdTax((thresholds[1] - thresholds[0]) * 0.19);
				if (incomeNumber <= thresholds[2]) {
					setSecondThresholdTax((incomeNumber - thresholds[1]) * 0.325 + 5092);
				} else {
					setSecondThresholdTax((thresholds[2] - thresholds[1]) * 0.325 + 5092);
					if (incomeNumber <= thresholds[3]) {
						setThirdThresholdTax((incomeNumber - thresholds[2]) * 0.37 + 29467);
					} else {
						setThirdThresholdTax(
							(thresholds[3] - thresholds[2]) * 0.37 + 29467
						);
						if (incomeNumber > thresholds[4]) {
							setFourthThresholdTax(
								(incomeNumber - thresholds[4]) * 0.45 + 51667
							);
						}
					}
				}
			}
		} else {
			setFirstThresholdTax(0);
		}
		setBreakdowns(breakets);
	}, []);

	useEffect(() => {
		let incomeAfterTax = parseInt(incomeValue);
		firstThresholdTax > 0 &&
			(incomeAfterTax = incomeAfterTax - firstThresholdTax);
		secondThresholdTax > 0 &&
			(incomeAfterTax = incomeAfterTax - secondThresholdTax);
		thirdThresholdTax > 0 &&
			(incomeAfterTax = incomeAfterTax - thirdThresholdTax);
		fourthThresholdTax > 0 &&
			(incomeAfterTax = incomeAfterTax - fourthThresholdTax);
		setTaxableIncome(incomeAfterTax);
	}, [
		firstThresholdTax,
		secondThresholdTax,
		thirdThresholdTax,
		fourthThresholdTax,
		incomeValue
	]);

	return (
		<div>
			<p style={{ marginTop: "2em", color: "white", textAlign: "center" }}>
				Your estimated taxable income is:
			</p>

			<div className="breakdownCard">${taxableIncome}</div>

			<div>
				<p style={{ color: "white", textAlign: "center" }}>Breakdown</p>
				{breakdowns &&
					breakdowns.map((breakdown, index) => (
						<div key={index} className="breakdownCard">
							<div>
								<p style={{ marginBottom: "0" }}>Tax Bracket</p>
								{breakdown}
							</div>
							<div>
								{index === 0
									? "$0"
									: index === 1
									? `$${firstThresholdTax}`
									: index === 2
									? `$${secondThresholdTax}`
									: index === 3
									? `$${thirdThresholdTax}`
									: index === 4
									? `$${fourthThresholdTax}`
									: ""}
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default EstimatedTaxableIncome;
