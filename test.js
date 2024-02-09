const todos = [
    {id: 1, text: 'Learn Redux for state management', completed: false, description: 'Study Redux and implement it in a React Native project', createdBy: 'Satyam Shukla', lastUpdate: new Date().getTime()},
    {id: 2, text: 'Explore React Navigation', completed: false, description: 'Research React Navigation library for navigation in React Native apps', createdBy: 'John Doe', lastUpdate: new Date().getTime()},
    {id: 3, text: 'Understand Native Modules', completed: false, description: 'Investigate how to create and use native modules in React Native projects', createdBy: 'Jane Smith', lastUpdate: new Date().getTime()},
    {id: 4, text: 'Implement Push Notifications', completed: false, description: 'Integrate push notifications using libraries like Firebase Cloud Messaging (FCM)', createdBy: 'Alice Johnson', lastUpdate: new Date().getTime()},
    {id: 5, text: 'Optimize Performance', completed: true, description: 'Learn techniques to optimize performance in React Native apps such as code splitting and lazy loading', createdBy: 'Bob Brown', lastUpdate: new Date().getTime()},
    {id: 6, text: 'Explore Hooks', completed: false, description: 'Understand and use React Hooks such as useState and useEffect in React Native components', createdBy: 'Emily Davis', lastUpdate: new Date().getTime()},
    {id: 7, text: 'Implement Authentication', completed: false, description: 'Implement user authentication using libraries like Firebase Authentication or OAuth', createdBy: 'David Wilson', lastUpdate: new Date().getTime()},
    {id: 8, text: 'Integrate Testing Frameworks', completed: false, description: 'Explore and set up testing frameworks like Jest and React Native Testing Library for testing React Native components', createdBy: 'Sophia Lee', lastUpdate: new Date().getTime()},
    {id: 9, text: 'Study Animation Libraries', completed: false, description: 'Research animation libraries like React Native Animated and Lottie for creating animations in React Native apps', createdBy: 'Michael Martinez', lastUpdate: new Date().getTime()},
    {id: 10, text: 'Build Custom Components', completed: false, description: 'Create custom UI components for reuse across multiple React Native projects', createdBy: 'Olivia Garcia', lastUpdate: new Date().getTime()}
  ]

  const x = todos.find((todo)=>{
      return  todo.id ===1
  });

  console.log("Before",x)


  if(x && !x.completed){
      x.completed = !x.completed; 
  }
  console.log("After",x)