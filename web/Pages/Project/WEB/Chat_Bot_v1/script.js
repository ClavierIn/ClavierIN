
  // List of possible responses to greetings
  const greetingResponses = [
    'Hello! How can I assist you today?',
    'Hi there! What can I do for you?',
    'Hey! How can I help?',
    'Greetings! How may I help you today?',
    'Hi! Need any assistance?'
  ];

  // List of possible responses to "Who are you?" or "Siapa kamu?"
  const whoAreYouResponses = [
    "GW bot bang.. ",
    "Gw Ai ter lol, Yang buat gw gak niat.<br> calvin Gblk",
    "Gw adalah... Artifical Intelegent Terlol yang pernah ada",
    "Tebak Hayo...",
    "'Pura Pura lupa'"
  ];

  // List Tolong 

  const HelpResponses = [
    "Iya Sir apa yang kamu mau",
    "Kamu Mau aku bantu apa?",
  ]


  //if (userInput === '') return;  // kalo "input" kosong gak bakal muncul

  // Variable to track previous user input
  let previousInput = '';

  document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission (if inside a form)
      sendMessage(); // Call sendMessage when Enter is pressed
    }
  });

  // Function to handle the user's input
  function sendMessage() {
    const userInput = document.getElementById('userInput').value.toLowerCase(); // Get and lowercase input
    const chatbox = document.getElementById('chatbox');

    // Display the user's message
    chatbox.innerHTML += `<p class="user-message"><b>You</b> ${userInput}</p>`;

    // Default response if no recognized greeting or question
    let response = "Masih Pengembangan Bang, Jadi Gw masih lol..";

    // List of recognized greetings
    const greetings = ['hello', 'hallo', 'hai'];

    // Check if the input matches any greeting
    for (let greet of greetings) {
      const regex = new RegExp(`\\b${greet}\\b`, 'i'); // Create a case-insensitive regex
      if (regex.test(userInput)) {
        // If the same greeting is entered twice, change the response
        if (userInput === previousInput) {
          response = 'You already said that! Do you want to ask something else?';
        } else {
          // Randomly select a response from the greetingResponses array
          response = greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
        }
        break;
      }
    }

    // Check if the input is asking "Who are you?" or "Siapa kamu?"
    const whoAreYouQuestions = ['siapa kamu', 'who are you', 'kamu siapa'];
    for (let question of whoAreYouQuestions) {
      const regex = new RegExp(`\\b${question}\\b`, 'i'); // Case-insensitive match
      if (regex.test(userInput)) {
        // Randomly select a response from the whoAreYouResponses array
        response = whoAreYouResponses[Math.floor(Math.random() * whoAreYouResponses.length)];
        break;
      }
    }

    // Check kalo input bilang "tolong" atau "help"
    const helpQuestion = ['tolong', 'help']
    for (let question of helpQuestion){
        const regex = new RegExp(`\\b${question}\\b`, 'i');
        if (regex.test(userInput)){
            //jawaban Random
            response =HelpResponses[Math.floor(Math.random() * HelpResponses.length)];
            break;
        }
    }


    // Handle math operations
    if (isMathExpression(userInput)) {
      response = calculateMath(userInput);
    }

    // Display the bot's response
    chatbox.innerHTML += `<p class="bot-message"><b>Bot:</b> ${response}</p>`;

    // Update previousInput to the current input
    previousInput = userInput;

    // Clear the input field
    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
  }

  // Function to check if the user input is a valid math expression
  function isMathExpression(input) {
    // Basic check for math operations (like +, -, *, /, sqrt, etc.)
    const mathPattern = /(\d+[\+\-\*\/\^\%]|\b(sqrt|sin|cos|tan)\b|\d+\s*\^\s*\d+)/;
    return mathPattern.test(input);
  }

  // Function to evaluate and calculate the math expression
  function calculateMath(input) {
    try {
      // Replace "sqrt" with Math.sqrt for square root calculations
      input = input.replace(/sqrt/g, 'Math.sqrt');

      // Evaluate the expression (handle power operator as ** or ^)
      input = input.replace(/\^/g, '**');

      // Perform the calculation using JavaScript's eval
      const result = eval(input);

      if (result !== undefined && !isNaN(result)) {
        return `The result is: ${result}`;
      } else {
        return "I couldn't calculate that. Please check your input.";
      }
    } catch (error) {
      return "There was an error in the calculation. Please try again.";
    }

  
  }


  function clearChat() {
    chatbox.innerHTML = '';  // Hapus semua pesan di chatbox
  }
