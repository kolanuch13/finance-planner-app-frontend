// import css from './'

export const ExpensesLimits = ({monthlyLimit, dailyLimit}) => {
    return (
        <>
          <label>
            <input
              type="text"
              value={dailyLimit}
              name="dailyLimit"
              readOnly
            />
            Daily limit
          </label>
          <label >
            <input
              type="text"
              value={monthlyLimit}
              name="monthlyLimit"
              readOnly
            />
            Monthly limit
          </label>
          <button type="submit">Ready</button>
          <button type="button">Add income</button>
        </>
    )
}