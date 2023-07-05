import { UPcomingEvents } from "./db/events.js";
const CardsContainer = document.querySelector("#Hackathon-container");
const Eventdeatails = document.querySelector("#info");

for (const event of UPcomingEvents) {
  // Create the outer div element with class and attributes
  const outerDiv = document.createElement('div');
  outerDiv.classList.add('my-2', 'mx-4', 'lg:flex', 'shadow', 'rounded-lg', 'border', 'border-gray-400');
  CardsContainer.appendChild(outerDiv)

  // Create the first inner div element with class and attributes
  const blueDiv = document.createElement('div');
  blueDiv.classList.add('bg-blue-600', 'rounded-lg', 'lg:w-2/12', 'py-4', 'block', 'h-full', 'shadow-inner');

  // Create the text elements inside the blue div
  const blueDivText1 = document.createElement('div');
  blueDivText1.classList.add('text-center', 'tracking-wide');
  blueDivText1.innerHTML = `
  <div class="text-white font-bold text-4xl">${event.date}</div>
  <div class="text-white font-normal text-2xl">${event.month}</div>
`;
  blueDiv.appendChild(blueDivText1);

  // Append the blue div to the outer div
  outerDiv.appendChild(blueDiv);

  // Create the second inner div element with class and attributes
  const whiteDiv = document.createElement('div');
  whiteDiv.classList.add('w-full', 'lg:w-11/12', 'xl:w-full', 'px-1', 'bg-white', 'py-5', 'lg:px-2', 'lg:py-2', 'tracking-wide');

  // Create the content inside the white div
  const whiteDivContent = document.createElement('div');
  whiteDivContent.classList.add('flex', 'flex-row', 'lg:justify-start', 'justify-center');
  whiteDivContent.innerHTML = `
  <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
    <i class="far fa-clock"></i> ${event.time}
  </div>
  <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
    Organiser: ${event.organizer}
  </div>
`;
  whiteDiv.appendChild(whiteDivContent);

  // Create the title inside the white div
  const whiteDivTitle = document.createElement('div');
  whiteDivTitle.classList.add('font-semibold', 'text-gray-800', 'text-xl', 'text-center', 'lg:text-left', 'px-2');
  whiteDivTitle.textContent = `${event.name}`;
  whiteDiv.appendChild(whiteDivTitle);

  // Create the address inside the white div
  const whiteDivAddress = document.createElement('div');
  whiteDivAddress.classList.add('text-gray-600', 'font-medium', 'text-sm', 'pt-1', 'text-center', 'lg:text-left', 'px-2');
  whiteDivAddress.textContent = `${event.venue}`;
  whiteDiv.appendChild(whiteDivAddress);

  // Append the white div to the outer div
  outerDiv.appendChild(whiteDiv);

  // Create the third inner div element with class and attributes
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('flex', 'flex-row', 'items-center', 'w-full', 'lg:w-1/3', 'bg-white', 'lg:justify-end', 'justify-center', 'mr-3', 'lg:px-0');

  // Create the buttons inside the buttons div
  const buttonsDivContent = document.createElement('div');
  buttonsDivContent.classList.add('flex', 'justify-end', 'my-4');
  buttonsDivContent.innerHTML = `
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
    Register
  </button>
  <button id="openDrawerBtn${event._id}"  class="openDrawerBtn bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
    View More
  </button>
`;
  buttonsDiv.appendChild(buttonsDivContent);

  // Append the buttons div to the outer div
  outerDiv.appendChild(buttonsDiv);

  // Append the outer div to the document body
  document.body.appendChild(outerDiv);

  // Create two horizontal lines (hr elements)
  const hr1 = document.createElement('hr');
  const hr2 = document.createElement('hr');

  // Append the hr elements to the document body
  document.body.appendChild(hr1);
  document.body.appendChild(hr2);

  // Create the Read More section
  const readMoreSection = document.createElement('div');
  readMoreSection.classList.add('read-more-section', 'hidden', 'px-2', 'py-4');
  readMoreSection.innerHTML = `
     <h3 class="text-gray-800 text-4xl font-semibold mb-2 text-center">${event.name}</h3>
     <p class="text-gray-600 text-center">${event.info}</p>
     <img class="h-[20%] w-[20%] mx-auto mt-5" src="${event.img}" alt="Image">

   `;

  // Append the Read More section to the outer div
  CardsContainer.appendChild(readMoreSection);

  // Get the View More button element
  const viewMoreBtn = outerDiv.querySelector(`#openDrawerBtn${event._id}`);

  // Add click event listener to the View More button
  viewMoreBtn.addEventListener('click', () => {
    // Toggle the visibility of the Read More section
    readMoreSection.classList.toggle('hidden');
  });

}



