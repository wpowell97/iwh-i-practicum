# Welcome to the Integrating With HubSpot I: Foundations Practicum

This repository contains my practicum submission for the **Integrating With HubSpot I: Foundations** course.  
This practicum is one of two requirements for receiving the certification. The other requirement is passing the exam with at least 75%.

📖 Full instructions: [Practicum directions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en)

---

## 🔗 Custom Object Link (Developer Test Account)

Here is the required link to the list view of my custom object in my HubSpot developer test account:

👉 [Custom Object List View](https://app-eu1.hubspot.com/contacts/146760714/objects/2-146200606/views/all/list)

---

## ✅ Requirements Completed

- Created a **developer test account** with a private app.  
- Built a **custom object** (`Games`) with at least 3 properties:
  - `name` (string)
  - `publisher` (string)
  - `price` (number)  
- Added **3+ records** to the custom object.  
- Associated the custom object with **Contacts**.  
- Implemented at least **3 new routes** in `index.js`:
  - `GET /` → displays custom objects in a table (`homepage.pug`)  
  - `GET /update-cobj` → shows form to add a new record (`updates.pug`)  
  - `POST /update-cobj` → creates a new record and redirects home  
- Added **2 new pug templates** (`homepage.pug`, `updates.pug`).  
- Linked to the **custom object list view** here in the README.  
- Merged `working-branch` back into `main`.

---

## ⚡ Tips Followed

- Committed changes frequently with meaningful commit messages.  
- Did **not** include my private app token in the repository (kept in `.env`).  
- Used the required stack: Node, Express, Axios, Pug.  
- Ensured the practicum runs locally with no extra configuration.

---

## 💻 Run Locally

Clone the repo, install dependencies, and run the app:

```bash
git clone https://github.com/<your-username>/<firstname>-<lastname>-iwh-i-practicum.git
cd <firstname>-<lastname>-iwh-i-practicum

npm install
```

Create a `.env` file in the project root:

```
PORT=3000
PRIVATE_APP_TOKEN=pat-<your-token-here>
CUSTOM_OBJECT=2-146200606
PROPS=name,publisher,price
```

Run the app:

```bash
npm start
```

Visit:  
👉 [http://localhost:3000](http://localhost:3000) → View the table  
👉 [http://localhost:3000/update-cobj](http://localhost:3000/update-cobj) → Add a record

---

## 📝 Notes

- This submission is for the **Integrating With HubSpot I: Foundations Practicum** only.  
- All work is my own, following HubSpot Academy’s instructions.  
- Private app token is stored locally in `.env` and not committed.

## Contributor

- Will Powell (Frontend Developer)
