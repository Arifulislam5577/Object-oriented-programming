const myObj = {
  owner: "Ariful Islam",
  payment: [100, 200, 120, 320, 150],

  get latest() {
    return this.payment.slice(-1).pop();
  },
  set addPay(num) {
    return this.payment.push(num);
  },
};

// console.log(myObj.latest);
// console.log((myObj.addPay = 300));
// console.log(myObj.payment);

// কোনো একটা অবজেক্টের প্রাইভেট প্রোপার্টিগুলো এক্সেস করার জন্য Get and Set ব্যবহার করা হয়।

const ReactAngle = function (height, width) {
  this.height = height;
  this.width = width;

  myReact = function () {
    console.log(this.height * this.width);
  };

  let myObj = {
    x: 120,
    y: 200,
  };

  Object.defineProperty(this, "myObj", {
    get: function () {
      return myObj;
    },
    set: function (value) {
      myObj = value;
    },
  });
};

const helloObj = {
  a: 12,
  b: 3,
  c: 100,
};

const ReactOne = new ReactAngle(20, 30);
console.log(ReactOne.myObj);
console.log(
  (ReactOne.myObj = {
    x: 1,
    y: 2,
  })
);

console.log((ReactOne.myObj = helloObj));

