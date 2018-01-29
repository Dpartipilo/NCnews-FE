export const timeFormat = (time, format) => {
  let t = new Date(time);
  let tf = n => {
    return (n < 10 ? "0" : "") + n;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
    switch (a) {
      case "yyyy":
        return tf(t.getFullYear());
        break;
      case "MM":
        return tf(t.getMonth() + 1);
        break;
      case "mm":
        return tf(t.getMinutes());
        break;
      case "dd":
        return tf(t.getDate());
        break;
      case "HH":
        return tf(t.getHours());
        break;
      case "ss":
        return tf(t.getSeconds());
        break;
    }
  });
};
// console.log(timeFormat(1515837117000, "dd/MM/yyyy"));
