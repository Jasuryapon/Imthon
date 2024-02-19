// 3) Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:

/*
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(17));
console.log(isPrime(15));
*/

// 5) n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.

/*function getSumBetweenNumbers(n1, n2) {
  return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
}

console.log(getSumBetweenNumbers(1, 50));
*/

// 9) Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
/*
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];
function alreadyRead(books) {
  books.forEach((book) => {
    if (book.alreadyRead) {
      console.log(`${book.author}ning ${book.title} kitobi o'qiglan`);
    } else {
      console.log(`${book.author}ning ${book.title} kitobi o'qilmagan`);
    }
  });
}

alreadyRead(books);
*/
