const socket = io("http://localhost:8080");
socket.on('chatHistory', (msgs) => {
    console.log(msgs)
    const msgHTML = msgs.map(msg => createMessage(msg));
    $("#messages").html(msgHTML.join(" "));

});

function createMessage(msg) {
    return `        <div class="chat-message">
    <div class="flex items-end">
      <div
        class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
      >
        <span class="brand-color">${msg.user}</span>
        <div>
          <span
            class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
            >${msg.message}</span
          >
        </div>
      </div>
    </div>
  </div>`;
}
