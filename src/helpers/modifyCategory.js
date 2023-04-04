const modifyCategory = name => {
  const word = name.split(' ')[0];
  return word[0].toUpperCase() + word.slice(1);
};

export default modifyCategory;
