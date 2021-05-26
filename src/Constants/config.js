export const COUNTRY_CODES = [
	{ name: "Australia" },
	{ name: "United States" },
	{ name: "United Kingdom" }
];

export const INCOME_YEAR = [{ name: "2019 - 2020" }, { name: "2020 - 2021" }];

export const TAX_BRACKET = {
	"2019 - 2020": [
		"0 – $18,200",
		"$18,201 – $45,000",
		"$45,001 – $120,000",
		"$120,001 – $180,000",
		"$180,001 and over"
	],
	"2020 - 2021": [
		"0 – $18,200",
		"$18,201 – $37,000",
		"$37,001 – $90,000",
		"$90,001 – $180,000",
		"$180,001 and over"
	]
};

export const TAX_THRESHOLD = {
	"2019 - 2020": [18200, 45000, 120000, 180000],
	"2020 - 2021": [18200, 37000, 90000, 180000]
};
