# Technical Design Document Calculator Application
This document provides technical details on how to implement a Simple Online Calculator
based on the provided functional design document.

## System Architecture
A RESTful architecture is used:
![restful.png](assets%2Frestful.png)

## Project Structure
```
calculator-app/
│
├── backend/
│   ├── app.js
│   ├── routes/
│   │   └── operations.js
│   └── tests/
│       └── operations.test.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── package.json
└── README.md
```

### Frontend
- **Framework:** No framework is used.
- **Styling:** CSS for styling components.

### Backend
- **Framework:** Node.js with Express.js.
- **Database:** No database is used.
- **API Endpoints:** 
    - `/add`: Adds two numbers.
    - `/subtract`: Subtracts two numbers.
    - `/multiply`: Multiplies two numbers.
    - `/divide`: Divides two numbers.

