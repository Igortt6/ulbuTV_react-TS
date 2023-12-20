# React + TypeScript + Vite

1) Component Card: 
		Створили комопнент Card, для його пропсів описали interface, який показує якого типу має бути кожен props. 

		Також вказали що сам компонент Card типу FC, з дженеріком CardProps.
2) Component UserList:
		Створили компонент UserList типу FC, з дженеріком UserListProps. 
		Для типізації UserListProps, створили окремий вайл types.tsx. Вказали там interface IUser. 

		Створили імітацію БД у App.tsx. 
3) Component UserItem: 
		Створили Декомпозицію вже уснуючого компонента  UserList.

4) Axios запит. Типізація ХУКа UseState
		Створюємо UseState з масивом - дженеріком IUser.
		fetchUsers з запитом на сервер Axios, з вказанням дженеріка. Для типізації відповіді від сервера 
5) Універсальний компонент для будь якого списку 
		