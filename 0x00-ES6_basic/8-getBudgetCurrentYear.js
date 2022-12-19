function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {

  const a = budget[`income-${getCurrentYear()}`];
  const b = budget[`gdp-${getCurrentYear()}`];
  const c = budget[`capita-${getCurrentYear()}`];

  const budget = {
    [a]: income,
    [b]: gdp,
    [c]: capita
  }

  return budget;
}