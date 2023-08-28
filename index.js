// 1.
// Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість.
// Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
// 👉 Потім через join()

// ==============for================

const friendsFor = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let stringFor = '';
for (let index = 0; index < friendsFor.length; index++) {
    const friendFor = friendsFor[index];
    if (stringFor += friendFor) {
        stringFor += ',';
    };
};
console.log(stringFor);

// ================join=================

const friendsJoin = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
console.log(friendsJoin.join(','));

// 2.
// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];

// ===============Видалити=================

const cardToRemove = 'Карточка-3';
const cardToRemoveIndex = cards.indexOf('Карточка-3');
const cardRemove = cards.splice(cardToRemoveIndex, 1);
console.log(cards);

// ================Додати===============

const cardToInsert = 'Карточка-6';
const cardInsert = cards.splice(4, 0, cardToInsert);
console.log(cards);

// ================Оновити===============

const secondCardToUpdate = "Карточка-5";
const firstCardToUpdateIndex = cards.indexOf("Карточка-1");
const cardUpdate = cards.splice(firstCardToUpdateIndex, 1, secondCardToUpdate)
console.log(cards);