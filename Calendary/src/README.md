
# CALENDARY: YOUR APPOINTMENT BOOKING

The Unit 2 project, a ReactJS application for simple appointment booking, utilizes a Fetch API to fetch holiday data from a remote server. It also features a real-time integration with Airtable to sync appointment data.

To ensure seamless data flow, the project employs the following features:

#### State Management: 
ReactJS provides a robust state management system, which enables the application to handle and manipulate the data.

#### API Integration: 
The application uses the Fetch API to communicate with the remote server and fetch holiday data. The holiday data is then used to disable appointment booking on holidays.

#### Real-time Data Sync:
Airtable, a cloud-based database, is integrated into the project to provide real-time data sync. This ensures that any changes made to the appointment booking data are instantly reflected in the Airtable database.

#### Conditional Rendering:
The project employs conditional rendering techniques to dynamically render appointment booking options based on the availability of holidays.

#### Form Validation: 
The application includes robust form validation to ensure data accuracy and integrity before booking an appointment.

By utilizing these features, the Unit 2 project effectively creates a simple, yet efficient, appointment booking system.



## Screenshots

![App Screenshot](https://i.imgur.com/lxOwMQe.png)
![App Screenshot](https://i.imgur.com/7srgvVk.png)
![App Screenshot](https://i.imgur.com/Q91oqoB.png)

## Tech Stack

**Client:**  Json, Reactjs, CSS, HTML, Airtable, Vercel, ants Design UI



## Demo


"Calendary was successfully deployed to Vercel.
You can access the application at:

####  https://calendary-lovat.vercel.app/


## Futures Updates

To ensure the continued success and seamless functionality of the Unit 2 project in the future, consider the following steps:

#### Implement Proper Security Measures
To safeguard sensitive data, especially appointment booking information, prioritize the implementation of robust authentication and authorization measures. Additionally, enhance data transmission security by implementing HTTPS and Secure Sockets Layer (SSL).

#### Monitor and Troubleshoot
Continuously monitor the application's performance and promptly address any potential issues. Utilize tools like Google Analytics and Firebase for effective performance monitoring and troubleshooting.

#### Test and Debug
Conduct comprehensive testing of the application's features, including API integration, real-time data synchronization, conditional rendering, and form validation. Address and resolve any bugs or errors identified during testing to ensure a smooth user experience.

#### Provide User Feedback Mechanisms
Implement mechanisms for user feedback, such as a contact form or a chatbot, to gather valuable insights from users. Use this feedback to enhance the application's functionality and overall user experience.

#### Introduce Additional Features
Consider expanding the project by incorporating new features, such as a calendar monthly view and the ability to download reports in PDF format. These additions can enhance the application's usefulness and user satisfaction.

By following these steps, the Unit 2 project can not only be maintained but also improved, ensuring its seamless functionality and continued success.
## Lessons Learned

### Challenges Faced
The most significant challenge during this project was managing my time effectively. As a full-time working mom with two kids and a university student, finding dedicated time for coding, reviewing materials, and self-study required extra effort. Despite this, I'm grateful for the unwavering support and assistance from both instructors and classmates, which played a crucial role in overcoming obstacles.

### Key Takeaways

#### Time Management
The key to successful learning in this hectic schedule is effective time management. I would love to Prioritize self-study and dividing my time efficiently so I be abled to balance my responsibilities effectively.

#### Focus on JavaScript Mastery
A major goal for me was to become proficient in JavaScript(as of this pace). Understanding its intricacies and enhancing my coding skills became a priority, contributing significantly to my growth as a developer.

#### Balancing Design and Coding
Recognizing the importance of finding a balance between design and coding was another crucial takeaway. While design is essential, it's equally important not to spend excessive time on it and maintain a strong focus on coding tasks to ensure project progression.
## API Reference

#### Get all items

```http
  GET  /api/v3/PublicHolidays/{Year}/{CountryCode}
```

| Parameter | Required     | Example             |
| :-------- | :-------     | :------------------------- |
| `year`     | `true`      | 2023 |
| `Country code` | `true`  | SG |


## Favorite Code:

```javascript
  useEffect(() => {
    base('calendarBooking')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setAppointments(records);
        fetchNextPage();
      });
  }, [])
```


## Latest Update

#### As of November 11, 2023
Calendar view is already available. Read-only. It fetched all the data available.
Adding newly event will automatedly displayed.
New page route to directly to a appointment form.