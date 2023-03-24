import React from 'react';
import style from './InputsList.module.css';

const onChangePlaceholder = () => {};

const InputsListItem = ({
  num,
  title,
  type = 'text',
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
    <li className={style.item}>
      {children ? (
        children
      ) : (
        <input
          className={style.input}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
      )}

      <label className={style.label}>
        <h3 className={style.title}>
          {num && <span className={style.titleFirst}>{num}.</span>}
          <span className={style.titleSecond}>{title}</span>
        </h3>
      </label>

      {Component && <Component className={style.select} />}
      {descr && <p className={style.descr}>{descr}</p>}
    </li>
  );
};

export default InputsListItem;
