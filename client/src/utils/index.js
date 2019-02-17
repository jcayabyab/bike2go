export const formatMoney = number => {
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const milliToHour = time => {
  const hour = Math.floor(time / 3600000);
  const minute = Math.floor((time - hour * 3600000) / 60000);
  const formattedNum = ("0" + minute).slice(-2);
  return hour + ":" + formattedNum;
};

export const RATE = 3 / 60 / 60 / 1000;
