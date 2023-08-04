const fibs = (num, res = [], sum = 0) => {
  if (num < 2) {
    res.push(num);
    return res;
  }

  sum = fibs(num - 1) + fibs(num - 2);
  res.push(sum);
  return fibs(num, res, sum);
};

const factorial = (num, fac = 1) => {
  if (num === 1) return fac;

  fac = num * fac;
  return factorial(num - 1, fac);
};

const sumRange = (num, sum = 1, val) => {
  if (sum === num) return val;

  val = sum + num;
  return sumRange(num, sum + 1, val);
};

const power = (b, e, i = 0) => {
  if (e === 0) return 1;
  if (i === e - 1) return b;

  b = b * b;
  return power(b, e, i + 1);
};

const all = (arr, cb, i) => {
  if (i === arr.length) return true;

  if (!cb(arr[i])) {
    return false;
  }

  return all(arr, cb, i + 1);
};

const productOfArray = (arr, i = 0, prod = 1) => {
  if (i === arr.length) return prod;

  prod = arr[i] * prod;

  return productOfArray(arr, i + 1, prod);
};
