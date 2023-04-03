import React from 'react';
import css from './InputsList.module.css';

const onChangePlaceholder = () => {};

const InputsListItem = ({
  num,
  title,
  type = 'number',
  name,
  component: Component = null,
  descr,
  placeholder = null,
  value,
  disabled = false,
  onChange = onChangePlaceholder,
  onBlur = null,
  children,
}) => {
  return (
    <li className={css.item} id={num}>
      {children ? (
        children
      ) : (
        <input
          className={css.input}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
      )}

      <label className={css.label}>
        <h3 className={css.title}>
          {num && <span className={css.titleFirst}>{num}.</span>}
          <span className={css.titleSecond}>{title}</span>
        </h3>
      </label>

      {Component && <Component className={css.select} />}
      {descr && <p className={css.descr}>{descr}</p>}
    </li>
  );
};

export default InputsListItem;
