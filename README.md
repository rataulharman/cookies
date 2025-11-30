# Assignment 2 – Working With Cookies   

## Overview  
This project demonstrates how to use **cookies** in a web application to store user information.  
When the page loads, the system checks if cookies already exist. If not, a cookie consent dialog appears with options to **Accept All** or choose **Cookie Settings**.
The goal of the assignment is to understand how cookies store temporary information and how users can control what data is saved.
This project also demonstrates how to work with browser objects such as navigator and screen to detect device information.

Users can decide whether they want to store:
- Browser information  
- Operating system  
- Screen dimensions  

All cookies expire within **15–20 seconds**, which allows the application to be tested quickly.

## Link
Here is the link for the website:- 


## Features

### Cookie Management  
- `setCookie()` — creates cookies  
- `getCookie()` — retrieves cookies  
- Cookies expire after 17 seconds  
- Works with both “Accept All” and custom settings  

### Automatic Detection  
The system detects:
- Browser name  
- Operating system name  
- Screen resolution  

### Two Dialog Boxes  
1. **Cookie Consent Modal**  
2. **Cookie Settings Modal** with toggle switches (all ON by default)

### User Control  
- Users can accept all cookies  
- Users can choose which cookies to store  
- If the user rejects all, a “reject” cookie is still set (so the modal won’t appear again)


## 💻 Technologies Used
- **HTML5**  
- **CSS3**  
- **JavaScript (ES Modules)**  
- Native `<dialog>` element for modals  
- Browser APIs (`navigator`, `screen`)  

## Thanks for visiting the site.
