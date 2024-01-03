export const getAge = (month: number, year: number) => {
  const today = new Date();

  const birthDate = new Date(year, month - 1, 1);

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
}