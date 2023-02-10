// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    //code that runs after half a second
    if (Math.random() > 0.5) {
      resolve("Success");
    } else {
      reject("Failed")
    }
  }, 500);
});