import MessageService from "./message-service.js";

let userId = "Cwarrick";
const messageService = new MessageService(userId);

window.addEventListener("load", function () {
   document.getElementById("greeting").innerHTML = 'Welcome Cwarrick';
   messageService.getAllMessages()
   .then(successCallback, errorCallback);

   function successCallback(response) {

    populateMessages(response);
   }

   function errorCallback(response) {

   console.log(response);
   }
});

function populateMessages(message) {
 messages.forEach(message => {
      addMessageToThread(message);
 })
}


 function populateThread(messages){
     messages.forEach(message => {
     userIdHeading.appendChild(userIdContent);
     messageParagraph.appendChild(messageContent);
     messageListItem
     .appendChild(userIdHeading)
     .appendChild(messageParagraph);
     document.getElementById("message-list").appendChild(messageListItem);
     })
 }

 function createFormListener() {
 const form = document.getElementById("new-message-form");

  form.onsubmit = function (event) {

       event.preventDefault();

       const data = {
         fromid: userId,
         message: form.message.value
    };

      messageService.createNewMessage(data)
         .then(successCallback, errorCallback);

         function successCallback(response) {
        addMessageToThread(response);

        }

        function errorCallback(response) {

        console.log(response);
        }
  }
  };;

  function addMessageToThread(message) {
       const messageListItem = document.createElement("LI");
          const userIdHeading = document.createElement("h3");
          const messageParagraph = document.createElement("p");
          const messageContent = document.createTextNode(message.message);
          const userIdContent = document.createTextNode(message.fromid);
          userIdHeading.appendChild(userIdContent);
          messageParagraph.appendChild(messageContent);
          messageListItem
              .appendChild(userIdHeading)
              .appendChild(messageParagraph);
          document.getElementById("message-list").appendChild(messageListItem);

 }


  createFormListener();