1. Create Current Date & Time
let now = new Date();
console.log(now);


👉 This gives the current date and time.

✅ 2. Get Date, Month, Year
let d = new Date();

console.log(d.getDate());      // Day (1–31)
console.log(d.getMonth());     // Month (0–11) ❗ (0 = Jan)
console.log(d.getFullYear());  // Year


Example Output:

30
0   // January
2026

✅ 3. Get Time(Hours, Minutes, Seconds)
let t = new Date();

console.log(t.getHours());   // Hours (0–23)
console.log(t.getMinutes()); // Minutes (0–59)
console.log(t.getSeconds()); // Seconds (0–59)

✅ 4. Custom Date
let myDate = new Date("2026-01-30");
console.log(myDate);


OR

let myDate = new Date(2026, 0, 30); // year, month(0-based), day
console.log(myDate);

✅ 5. Format Date(Simple Way)
let d = new Date();

let date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
console.log(date);


Example Output:

30 / 1 / 2026

✅ 6. Format Time
let d = new Date();

let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
console.log(time);


Example Output:

19: 45: 30

✅ 7. Date & Time Together
let d = new Date();

let dateTime = d.toLocaleString();
console.log(dateTime);


Example Output:

30 / 1 / 2026, 7: 45: 30 PM

✅ 8. Timestamp(Milliseconds)
let timestamp = Date.now();
console.log(timestamp);