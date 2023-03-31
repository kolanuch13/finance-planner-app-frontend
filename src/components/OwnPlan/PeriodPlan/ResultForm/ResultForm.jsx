import styles from "./ResultForm.module.css";

const ResultForm = ({
  title,
  labelPosition = "over",
  options,
  data = {},
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.form}>
        {options.fields.map(({ type = "text", ...el }) => (
          <label
            key={el.name}
            className={(styles.label, labelPosition === "under" && styles.under)}
          >
            <p className={styles.labelTitle}>{el.title}</p>
            <input
              className={styles.input}
              type={type}
              name={el.name}
              value={data[el.name] === null ? "" : data[el.name]}
              disabled
            />
          </label>
        ))}
        <div
          className={(
            styles.btnWrapper,
            labelPosition === "over" && styles.btnReverse
          )}
        >
          <button
            className={(styles.btnSubmit, labelPosition === "under" && styles.under)}
            type="submit"
          >
            {options.btnSubmit}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResultForm;
