# Technical Design Document Calculator Application
This document provides technical details on how to implement a Simple Online Calculator
based on the provided functional design document.

## System Architecture
A static website architecture is used:
![architecture_simple.png](assets%2Farchitecture_simple.png)

## Project Structure
```
calculator-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
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

