import './ExpenseItem.css';

function ExpenseItem() {
	const expenseDate = new Date(2021, 5, 15);
	const expenseTitle = 'Car insurance';
	const expenseAmount = 256.74;

	return (
		<div className="expense-item">
			<div>{expenseDate.toISOString()}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
