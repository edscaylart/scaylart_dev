export const getAge = (year: number, month: number, day = 1) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  if (today.getMonth() < birthDate.getMonth()) {
    age--;
  } else if (
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() < birthDate.getDate()
  ) {
    age--;
  }
  return age;
};
