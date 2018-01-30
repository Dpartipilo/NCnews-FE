const timeFormat = (time, format) => {
  let t = new Date(time);
  let tf = n => {
    return (n < 10 ? "0" : "") + n;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => {
    switch (a) {
      case "yyyy":
        return tf(t.getFullYear());

      case "MM":
        return tf(t.getMonth() + 1);

      case "mm":
        return tf(t.getMinutes());

      case "dd":
        return tf(t.getDate());

      case "HH":
        return tf(t.getHours());

      case "ss":
        return tf(t.getSeconds());

      default:
        return;
    }
  });
};

export default timeFormat;
