const getCreateTimeForOutput = createdAt => {
  const date = createdAt.split('T')[0];
  const time = createdAt.split('T')[1]?.split('.')[0];
  return `${date} ${time}`;
};

export default getCreateTimeForOutput;
